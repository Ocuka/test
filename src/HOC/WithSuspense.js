import { Suspense } from "react"

import Preloader from "../components/Common/Preloader/Preloader"

const WithSuspense = (Component) => {
        return <Suspense fallback={<Preloader />}>
            <Component />
        </Suspense>

}

export default WithSuspense