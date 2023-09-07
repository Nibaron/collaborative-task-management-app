'use client';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export const Signup = () => {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <section className="max-w-md w-full px-4">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Sign Up
                    </h1>
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput
                            id="email2"
                            placeholder="name@flowbite.com"
                            required
                            shadow
                            type="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput
                            id="password2"
                            required
                            shadow
                            type="password"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="repeat-password"
                                value="Repeat password"
                            />
                        </div>
                        <TextInput
                            id="repeat-password"
                            required
                            shadow
                            type="password"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label className="flex" htmlFor="agree">
                            <p>I agree with the terms and conditions</p>
                        </Label>
                    </div>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </section>
        </main>
    );
};
