
export default function FullScreenSection(props) {
    let children = props.children;
    const base = "w-screen h-screen grid items-center text-center p-8 ";
    const style = props.styles ? base+props.styles : base;
    return (
        <section className={style}>
            {children}
        </section>
    )
}