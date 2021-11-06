import { useEffect, useMemo, useState } from "react";
import { USER } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getSession, useSession } from "node_modules/next-auth/client";

export const useUser = (redirect = "/") => {
  const dispatch = useDispatch();
  const router = useRouter();
  let isMounted = true;
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const check = async () => {
      try {
        const session = await getSession();
        if (session?.user && isMounted) {
          return dispatch(
            USER.UPDATE_DATA({ user: session.user, tokens: session.tokens })
          );
        }
        return router.replace(redirect);
      } catch (error) {
        if (isMounted) {
          dispatch(USER.UPDATE_DATA({ user: null, tokens: null }));
          return router.replace(redirect);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    check();

    return () => (isMounted = false);
  }, []);

  return { user, isLoading };
};
