// import NavigationButton from "@/component/button/navigateButton";

export default async function SlugPage({
    params
}: {
    params: Promise<{ slug: string }> // 从15 开始，需要使用 异步获取
}) {
    const { slug } = await params;
    console.log('slug: ', slug)
    const productDetails: any[] = [];
    return (
        <div>
            <h3>slug page1111</h3>

            <div>
                {/* <NavigationButton href="/blog" title="go back" /> */}
            </div>
            <div>
                <h4>params</h4>
                <p>{slug}</p>
            </div>
            <div>
                <h4>product details</h4>
                <div>
                    {productDetails?.map(item => {
                        return (
                            <div key={item.name} className="flex">
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}