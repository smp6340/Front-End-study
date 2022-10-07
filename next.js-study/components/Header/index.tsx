import Link from "next/link";

const linkstyle = {
    marginRight: '1rem'
}

const Header = () => {
    return(
        <>
            <div>
                <Link href={"/"}><a style={linkstyle}>홈</a></Link>
                <Link href={"/about"}><a style={linkstyle}>소개</a></Link>
                <Link href={"/ssr-test"}><a style={linkstyle}>SSR 테스트</a></Link>
            </div>
        </>
    );
}

export default Header;