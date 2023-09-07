import { Button } from "flowbite-react";
import profilePic from "../assets/image/profile-pic.jpg";

export const Profile = () => {
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    <div className="flex items-center"> {/* Use flex container */}
                        <img
                            src={profilePic}
                            className="max-w-sm rounded-lg shadow-2xl mr-4"
                            alt="profile-pic"
                        />
                        <div>
                            <div>
                                <h1 className="text-5xl font-bold">
                                    Nibaron Kumar Das
                                </h1>
                                <h1 className="text-2xl font-bold">
                                    junior Frontend Engineer
                                </h1>
                            </div>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <Button
                                type="button"
                                data-toggle-dark="light"
                                className="bg-blue-500 hover:bg-blue-600 text-white hover:bg-gray-600"
                            >
                                LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
