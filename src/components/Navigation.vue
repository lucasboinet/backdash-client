<template>
  <div
    id="drawer-disable-body-scrolling"
    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform flex flex-col justify-between items-center bg-white w-80 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-disable-body-scrolling-label"
  >
    <button
      type="button"
      data-drawer-hide="drawer-disable-body-scrolling"
      aria-controls="drawer-disable-body-scrolling"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg>
    </button>
    <div class="overflow-y-auto flex flex-col justify-between items-start flex-grow w-full">
      <ul class="space-y-2 w-full">
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap">My Apps</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg>
          </button>
          <ul
            id="dropdown-example"
            class="py-2 px-3 space-y-2"
          >
            <li>
              <a
                href="#"
                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >Products</a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >Billing</a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >Invoice</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="flex flex-col items-center w-full gap-2">
        <span>
          <a
            href="#"
            class="flex items-center text-sm underline font-normal rounded-lg dark:text-white"
          >
            <span class="flex-1 whitespace-nowrap">Sign Up</span>
          </a>
        </span>
        <span class="w-full">
          <a
            href="#"
            class="flex items-center text-base font-normal rounded-lg text-white bg-blue-400 p-3"
          >
            <span class="flex-1 whitespace-nowrap">Sign In</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>