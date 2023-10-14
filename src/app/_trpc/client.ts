import { AppRouter } from "@/server"
import { CreateTRPCReact, createTRPCReact} from "@trpc/react-query"

export const trpc = createTRPCReact<AppRouter>({})