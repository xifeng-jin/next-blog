import NavigationButton from "@/component/button/navigateButton";
const product = (id: string): Promise<{name: string; price: number }[] | undefined> => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            '1111': [{ name: '111_name', price: 1111}],
            '2222': [{ name: '222_name', price: 2222}],
            '3333': [{ name: '333_name', price: 3333}],
            '4444': [{ name: '444_name', price: 4444}],
            '5555': [{ name: '555_name', price: 5555}],
        }[id])
    }, 1000)
});

export function generateStaticParams() {
    console.log('🏗️ generateStaticParams 在构建时被调用');
    return ['1111','2222', '3333'].map(slug => ({
        slug: slug
    }))
}

export default async function SlugPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const productDetails = await product(slug);
    console.log(productDetails)
    return (
        <div>
            <h3>slug page</h3>
            <div className="w-full space-y-2 rounded-xl bg-yellow-100 p-4 selection:bg-yellow-200 selection:text-yellow-600 dark:bg-yellow-900 opacity-100 transition-opacity">
                <p className="text-left text-yellow-950 dark:text-yellow-100">
                Christian's should be infinitely more offended by depravity than they currently are. Sin is not just a 'lifestyle choice', that's demonic anti-God propaganda.
                </p>
            </div>
            <div>
                <NavigationButton href="/blog" title="go back" />
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