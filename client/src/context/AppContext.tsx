import {
    ACTIVITY_STATE,
    AppContext as AppContextType,
    DrawingData,
} from "@/types/app"
import { RemoteUser, USER_STATUS, User } from "@/types/user"
import { ReactNode, createContext, useContext, useState, useEffect } from "react"
import { checkBackendHealth } from "@/api"

const AppContext = createContext<AppContextType | null>(null)

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext)
    if (context === null) {
        throw new Error(
            "useAppContext must be used within a AppContextProvider",
        )
    }
    return context
}

function AppContextProvider({ children }: { children: ReactNode }) {
    const [users, setUsers] = useState<RemoteUser[]>([])
    const [status, setStatus] = useState<USER_STATUS>(USER_STATUS.INITIAL)
    const [currentUser, setCurrentUser] = useState<User>({
        username: "",
        roomId: "",
    })
    const [activityState, setActivityState] = useState<ACTIVITY_STATE>(
        ACTIVITY_STATE.CODING,
    )
    const [drawingData, setDrawingData] = useState<DrawingData>(null)
    const [backendStatus, setBackendStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking')

    // Check backend health on mount
    useEffect(() => {
        const checkHealth = async () => {
            try {
                await checkBackendHealth()
                setBackendStatus('connected')
            } catch (error) {
                setBackendStatus('disconnected')
                console.warn('Backend not available:', error)
            }
        }
        
        checkHealth()
    }, [])

    return (
        <AppContext.Provider
            value={{
                users,
                setUsers,
                currentUser,
                setCurrentUser,
                status,
                setStatus,
                activityState,
                setActivityState,
                drawingData,
                setDrawingData,
                backendStatus,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider }
export default AppContext
