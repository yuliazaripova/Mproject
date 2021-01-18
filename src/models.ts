import { RouteProp } from "@react-navigation/native";

export type TProductDetailsRoute = RouteProp<{ params: { name: string, id?: number } }, 'params'>