import { authApi } from "api-client/auth-api";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    revalidateOnFocus: false,
    ...options,
  });

  async function login() {
    await authApi.login({
      username: "test1",
      password: "123123",
    });

    await mutate();
  }

  async function logout() {
    await authApi.logout();

    mutate({}, false);
  }

  return { profile, error, login, logout };
}
