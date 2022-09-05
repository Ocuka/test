import { Suspense } from "react"
import Preloader from "../components/Common/Preloader/Preloader"

const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    }
}

export default WithSuspense