import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="flex flex-row justify-between py-4 border-b-2 w-full">
            {/*left side*/}
            <nav>
                <ul className="list-none">
                    <li className="inline mx-9 my-2"><Link href="/"><a className="font-bold text-lg">Duenez Bank</a></Link></li>
                    <li className="inline m-2"><Link href="/checks&savings"><a>Checks & Savings</a></Link></li>
                    <li className="inline m-2"><Link href="/"><a>Credit</a></Link></li>
                    <li className="inline m-2"><Link href="/"><a>Home Loans</a></Link></li>
                    <li className="inline m-2"><Link href="/"><a>Auto</a></Link></li>
                    <li className="inline m-2"><Link href="/aboutUs"><a>About Us</a></Link></li>
                </ul>
            </nav>
            {/*right side*/}
        </div>

    );

};
export default Navbar;