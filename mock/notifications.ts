import { useNow } from "@vueuse/core";
import type { notificationsDTO } from "~/types/DTOs/notifications";
const currentTime = useNow();

export const mockNotifications: notificationsDTO[] = [
  {
    id: 1,
    message: "Primeira mensagem de teste",
    date: currentTime.value,
    seen: false,
  },
  {
    id: 2,
    message: "Segunda mensagem de teste 2",
    date: currentTime.value,
    seen: false,
  },
];
