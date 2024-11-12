export function Home() {
    return <div className="w-full text-center pt-16">
        <div className="">
            <div className="flex justify-center">
            <img src="../public/logo-fill.svg" alt="" className="w-40 h-50 " />
            </div>
            <div>
                <p className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-orange-500 to-black">Summer Collection</p>
            </div>
            <div className="pt-5">
                <p className="text-xl">Discover the latest Trends in Fashion</p>
            </div>
            <div className="pt-8">
                <button className="bg-black text-white w-32 h-10 rounded-lg hover:shadow-lg hover:shadow-custom-dark-800/50">Shop Now</button>
            </div>
        </div>
        <div className="pt-40">
            <div className="bg-sky-200 max-h-max pt-10">
                <p className="text-2xl font-bold tracking-wide" >Featured Products</p>
                <div className="lg:grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 pt-10 lg:pl-12 pl-20">
                    <div className="w-1/4 pb-10">
                        <div className="w-80 h-auto bg-white rounded-lg drop-shadow-lg ">
                            <img src="https://imgs.search.brave.com/FZfvvzIOXZ4zc54UPwAnXvk2ZHRFG2IWvSZiO5s9dpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmJlYW5z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9sdWNh/LWZhbG9uaS1kZW5p/bS1zaGlydC5qcGVn?height=400&width=300" alt="Shirt" className="w-full bg-gray-200/50 h-64 object-cover rounded-lg" />
                            <p className="pt-4 font-bold text-xl pl-8 flex justify-start border-t-2 border-t-gray-500 rounded-lg">Product Name</p>
                            <p className="pt-2 font-medium text-xl pl-8 flex justify-start">$99.9</p>
                            <div className="pt-2 pb-4">
                                <button className="w-72 h-10 border rounded-lg border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/50 hover:border-gray-800/50 hover:border-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 pb-5 ">
                        <div className="w-80 h-auto bg-white rounded-lg drop-shadow-lg ">
                            <img src="https://imgs.search.brave.com/FZfvvzIOXZ4zc54UPwAnXvk2ZHRFG2IWvSZiO5s9dpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmJlYW5z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9sdWNh/LWZhbG9uaS1kZW5p/bS1zaGlydC5qcGVn?height=400&width=300" alt="Shirt" className="w-full bg-gray-200/50 h-64 object-cover rounded-lg" />
                            <p className="pt-4 font-bold text-xl pl-8 flex justify-start border-t-2 border-t-gray-500 rounded-lg">Product Name</p>
                            <p className="pt-2 font-medium text-xl pl-8 flex justify-start">$99.9</p>
                            <div className="pt-2 pb-4">
                                <button className="w-72 h-10 border rounded-lg border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/50 hover:border-gray-800/50 hover:border-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 pb-5 ">
                        <div className="w-80 h-auto bg-white rounded-lg drop-shadow-lg ">
                            <img src="https://imgs.search.brave.com/FZfvvzIOXZ4zc54UPwAnXvk2ZHRFG2IWvSZiO5s9dpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmJlYW5z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9sdWNh/LWZhbG9uaS1kZW5p/bS1zaGlydC5qcGVn?height=400&width=300" alt="Shirt" className="w-full bg-gray-200/50 h-64 object-cover rounded-lg" />
                            <p className="pt-4 font-bold text-xl pl-8 flex justify-start border-t-2 border-t-gray-500 rounded-lg">Product Name</p>
                            <p className="pt-2 font-medium text-xl pl-8 flex justify-start">$99.9</p>
                            <div className="pt-2 pb-4">
                                <button className="w-72 h-10 border rounded-lg border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/50 hover:border-gray-800/50 hover:border-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 pb-5 ">
                        <div className="w-80 h-auto bg-white rounded-lg drop-shadow-lg ">
                            <img src="https://imgs.search.brave.com/FZfvvzIOXZ4zc54UPwAnXvk2ZHRFG2IWvSZiO5s9dpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmJlYW5z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9sdWNh/LWZhbG9uaS1kZW5p/bS1zaGlydC5qcGVn?height=400&width=300" alt="Shirt" className="w-full bg-gray-200/50 h-64 object-cover rounded-lg" />
                            <p className="pt-4 font-bold text-xl pl-8 flex justify-start border-t-2 border-t-gray-500 rounded-lg">Product Name</p>
                            <p className="pt-2 font-medium text-xl pl-8 flex justify-start">$99.9</p>
                            <div className="pt-2 pb-4">
                                <button className="w-72 h-10 border rounded-lg border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/50 hover:border-gray-800/50 hover:border-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-10 w-full h-64 bg-custom-dark text-white">
            <div>
                <p className="text-3xl font-semibold">Subscribe to get Updates !</p>
            </div>
            <div className="pt-5">
                <p>Get the latest updates on new products and upcoming sales</p>
            </div>
            <div className="flex justify-center pt-10">
                <div>
                    <input className="w-64 h-10 rounded pl-4 shadow-lg text-black text-sm border-2 border-gray-500/50" type="text" placeholder="Your email address" />
                </div>
                <div className="pl-5">
                    <button className="bg-white text-custom-dark w-32 h-10 rounded font-medium tracking-wider text-lg hover:shadow-md hover:shadow-gray-200/50">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 pt-8 lg:h-52">
            <div className="">
                <div className="flex justify-start">
                    <p className="font-semibold lg:pl-5 pl-5">About Us</p>
                </div>
                <span className=" text-start">
                    <p className="pl-5 opacity-75 lg:pt-4 pl-10">ClothStore is your one-step destination for trendy and affordable fashion.</p>
                </span>
            </div>
            <div className="pt-5 lg:pt-0">
                <div className="flex justify-start">
                    <p className="font-semibold lg:pl-5 pl-5">Quick Links</p>
                </div>
                <span className="text-start">
                    <p className="pl-5 opacity-75 pl-10 lg:pt-4 cursor-pointer">FAQ</p>
                    <p className="pl-5 opacity-75 pt-1 pl-10 cursor-pointer">Shipping</p>
                    <p className="pl-5 opacity-75 pt-1 pl-10 cursor-pointer">Returns</p>
                    <p className="pl-5 opacity-75 pt-1 pl-10 cursor-pointer">Contact Us</p>
                </span>
            </div>
            <div className="pt-5 lg:pt-0">
                <div className="flex justify-start">
                    <p className="font-semibold lg:pl-5 pl-5 ">Follow Us</p>
                </div>
                <div className="lg:flex lg:justify-start  grid grid-rows-3 justify-start opacity-75  lg:pt-4">
                    <span><p className="lg:pl-5 pl-5 cursor-pointer">Facebook</p></span>
                    <span><p className="lg:pl-5 pl-5 cursor-pointer">Instagram</p></span>
                    <span><p className="lg:pl-5 cursor-pointer">Twitter</p></span>
                </div>
            </div>
        </div>
        <div className="pb-5 opacity-75 pt-5">
            <p> &copy; 2024 ClothStore. All Rights are Reserved.</p>
        </div>
    </div>
}