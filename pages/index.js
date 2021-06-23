console.log('index process.env:', process.env);

function HomePage() {
    console.log('HomePage process.env:', process.env);
    console.log('PUBLIC ABCD:', process.env.NEXT_PUBLIC_ABCD);
    console.log('NORMAL ABCD:', process.env.NORMAL_ABCD);
    return <div>Welcome to Next.js!</div>
}

export default HomePage