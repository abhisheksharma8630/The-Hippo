"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { createPost } from "@/app/lib/action";
import { useFormState } from "react-dom";

export default function Form() {
  const initialState = { message: "", error: {} };
  const [state, dispatch] = useFormState(createPost, initialState);
  return (
    <form action={dispatch} className="p-4 space-y-4">
      <div className="space-y-4">
        {/* UserName */}
        <div>
          <label
            htmlFor="username"
            className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              aria-describedby="username-error"
              defaultValue=""
              className="block max-w-[400px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div id="username-error" aria-live="polite">
              {state.errors?.username &&
                state.errors.username.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        {/* Content */}
        <div>
          <label htmlFor="content" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Enter Content</label>
          <div>
            <textarea
              id="content"
              name="content"
              defaultValue=""
              rows={3}
              aria-describedby="content-error"
              className="block max-w-[400px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
            <div id="content-error" aria-live="polite">
              {state.errors?.content &&
                state.errors.content.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button type="submit" variant={'success'}>Create Post</Button>
      </div>
    </form>
  );
}
