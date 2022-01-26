import { useRouter } from "next/router";
import { useEffect } from "react";

function Redirect({ to, time }) {
  //STORE useRouter IN A VARIABLE AND PUSH THE ROUTE BACK TO HOMEPAGE AFTER 3 SECONDS
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(to);
    }, time || 3000 );
  }, [to]);

  return null;
}

export default Redirect;
