import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate= useNavigate();

    const handleLogout=()=>{
        return navigate('/signup');
    }
    return (
        <main className="flex items-center justify-center min-h-screen">
            <section className="max-w-md w-full px-4">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Login
                    </h1>
                </div>
                <form className="flex flex-col gap-4 ">
                    <div>
                        <Label htmlFor="email1" value="Your email"/>
                        <TextInput
                            id="email1"
                            placeholder="name@flowbite.com"
                            required
                            type="email"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password1" value="Your password" />
                        <TextInput
                            id="password1"
                            required
                            type="password"
                        />
                    </div>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white hover:bg-gray-600"
                        type="submit"
                    >
                        Submit
                    </Button>
                    <div className="flex">
    
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
    Don't have an account ? 
    </h2>
    <Button
        onClick={handleLogout}
        type="button"
        data-toggle-dark="light"
        className="bg-blue-500 hover:bg-blue-600 text-white hover:bg-gray-600"
    >
        Sign Up
    </Button>
</div>
                </form>
            </section>
        </main>
    );
};
