import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:8/12 lg:w-7/12">
                        <img
                            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?q=80&semt=ais_hybrid&w=740"
                            alt="image"
                        className="w-full h-auto rounded-lg" 
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React development is driven by a community of passionate developers who are constantly innovating and building modern web applications. Its component-based architecture makes it easier to create scalable, efficient, and reusable code. Developers enjoy working with React because it provides flexibility, excellent performance through a virtual DOM, and a strong ecosystem backed by tools, libraries, and community support.

                            Whether it’s building interactive user interfaces, single-page applications, or full-scale web platforms, React enables developers to bring ideas to life faster and with better quality. With continuous improvements and contributions from developers worldwide, React remains one of the most powerful and trusted technologies in modern web development.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About