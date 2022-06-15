import { useLayoutEffect, useState} from "react";

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true)
    useLayoutEffect(() => {
        const onPageLoad = () => {
            console.log("page loaded")
            setIsLoading(false);
        };
            //this seems to be always complete
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);
    return [isLoading]
}


// export const useLoading = () => {
//     const [isLoading, setIsLoading] = useState(true)
//     useEffect(() => {
//         const onPageLoad = () => {
//             if (document.readyState === "complete") {
//                 console.log("page loaded")
//                 setIsLoading(false);
//             }
//
//         }
//         console.log(document.readyState)
//         window.addEventListener("load", onPageLoad);
//         return () => window.removeEventListener("load", onPageLoad);
//
//     }, []);
//     return [isLoading]
// }
