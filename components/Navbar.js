import Link from 'next/link'
import { useSelector, shallowEqual } from 'react-redux'

function useGlobalItems() {
    return useSelector((state) => state, shallowEqual)
}

const Navbar = () => {
    const items = useGlobalItems()
    const totalItemsAmmount = Object.keys(items).map((key) => items[key]).reduce((x, y) => x + y, 0)

    return (
        <div className='w-full bg-purple-600 p-4 text-white'>
            <div className="w-9/12 m-auto flex justify-between">
                <div className="font-bold">
                    <Link href="/" passHref>
                        <a>My e-commerce</a>
                    </Link>
                </div>
                <div className="font-bold underline">
                    <Link href="/cart" passHref>
                        <a>{totalItemsAmmount} items in cart</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar