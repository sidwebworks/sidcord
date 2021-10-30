import { useEffect, useMemo, useState } from "react";
import { USER } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getSession, useSession } from "node_modules/next-auth/client";

export const useUser = (redirect = "/") => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const check = async () => {
      try {
        const session = await getSession();
        if (session?.user) {
          return dispatch(
            USER.UPDATE_DATA({ user: session.user, tokens: session.tokens })
          );
        }
        return router.replace(redirect);
      } catch (error) {
        dispatch(USER.UPDATE_DATA({ user: null, tokens: null }));
        return router.replace(redirect);
      } finally {
        setIsLoading(false);
      }
    };

    check();
  }, []);

  return { user, isLoading };
};
