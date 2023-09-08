import { Tables } from "../components";
import { useState } from "react";

export const Home = () => {

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
                        Welcome To Task Management App
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-center flex-wrap other:justify-evenly">
                    <Tables/>
                    <Tables/>
                    <Tables/>
                </div>
            </section>
        </main>
    );
};
