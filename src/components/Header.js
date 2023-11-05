function Header() {
    return (
        <header className="">
            {/* upper nav */}
            <div className="bg-[#F5EDDC] hidden md:block">
                <div className="max-w-screen-xl py-0.5 flex items-center justify-between mx-auto relative">
                    <div className="flex items-center">
                        <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="focus:outline-none inline-flex items-center hover:text-primary">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><g><path d="M5 17H13M5 12H19M5 7H13" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                            <span className="text-xs capitalize ml-1">all categories</span>
                        </button>
                        <button className="focus:outline-none inline-flex items-center ml-4 hover:text-primary">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.2919 1.25 10.6485 1.45282 9.95055 1.79224C9.27585 2.12035 8.49642 2.60409 7.52286 3.20832L5.45628 4.4909C4.53509 5.06261 3.79744 5.5204 3.2289 5.95581C2.64015 6.40669 2.18795 6.86589 1.86131 7.46263C1.53535 8.05812 1.38857 8.69174 1.31819 9.4407C1.24999 10.1665 1.24999 11.0541 1.25 12.1672V13.7799C1.24999 15.6837 1.24998 17.1866 1.4027 18.3616C1.55937 19.567 1.88856 20.5401 2.63236 21.3094C3.37958 22.0824 4.33046 22.4277 5.50761 22.5914C6.64849 22.75 8.10556 22.75 9.94185 22.75H14.0581C15.8944 22.75 17.3515 22.75 18.4924 22.5914C19.6695 22.4277 20.6204 22.0824 21.3676 21.3094C22.1114 20.5401 22.4406 19.567 22.5973 18.3616C22.75 17.1866 22.75 15.6838 22.75 13.7799V12.1672C22.75 11.0541 22.75 10.1665 22.6818 9.4407C22.6114 8.69174 22.4646 8.05812 22.1387 7.46263C21.8121 6.86589 21.3599 6.40669 20.7711 5.95581C20.2026 5.5204 19.4649 5.06262 18.5437 4.49091L16.4771 3.20831C15.5036 2.60409 14.7241 2.12034 14.0494 1.79224C13.3515 1.45282 12.7081 1.25 12 1.25ZM8.27953 4.50412C9.29529 3.87371 10.0095 3.43153 10.6065 3.1412C11.1882 2.85833 11.6002 2.75 12 2.75C12.3998 2.75 12.8118 2.85833 13.3935 3.14119C13.9905 3.43153 14.7047 3.87371 15.7205 4.50412L17.7205 5.74537C18.6813 6.34169 19.3559 6.76135 19.8591 7.1467C20.3487 7.52164 20.6303 7.83106 20.8229 8.18285C21.0162 8.53589 21.129 8.94865 21.1884 9.58104C21.2492 10.2286 21.25 11.0458 21.25 12.2039V13.725C21.25 15.6959 21.2485 17.1012 21.1098 18.1683C20.9736 19.2163 20.717 19.8244 20.2892 20.2669C19.8649 20.7058 19.2871 20.9664 18.2858 21.1057C17.2602 21.2483 15.9075 21.25 14 21.25H10C8.09247 21.25 6.73983 21.2483 5.71422 21.1057C4.71286 20.9664 4.13514 20.7058 3.71079 20.2669C3.28301 19.8244 3.02642 19.2163 2.89019 18.1683C2.75149 17.1012 2.75 15.6959 2.75 13.725V12.2039C2.75 11.0458 2.75076 10.2286 2.81161 9.58104C2.87103 8.94865 2.98385 8.53589 3.17709 8.18285C3.36965 7.83106 3.65133 7.52164 4.14092 7.1467C4.6441 6.76135 5.31869 6.34169 6.27953 5.74537L8.27953 4.50412Z" fill="currentColor"></path> </g></svg>
                            <span className="text-xs capitalize ml-1">property ads</span>
                        </button>
                        <button className="focus:outline-none inline-flex items-center ml-4 hover:text-primary">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.27097 8.214C6.02074 6.312 6.92262 5 8.96427 5H14.4369C16.4766 5 17.3795 6.312 18.1302 8.214L18.88 10.249C19.4387 10.2559 19.9519 10.5661 20.2284 11.064C20.3911 11.3476 20.4763 11.6709 20.4751 12V14.624C20.4824 15.2367 20.1808 15.8098 19.6776 16.14C19.4382 16.2929 19.162 16.3739 18.88 16.374H4.52022C4.23827 16.3739 3.96199 16.2929 3.72267 16.14C3.21939 15.8098 2.91786 15.2367 2.92512 14.624V12C2.92406 11.6713 3.00927 11.3483 3.17179 11.065C3.44833 10.5671 3.96155 10.2569 4.52022 10.25L5.27097 8.214Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.86629 16.375C6.86629 15.9608 6.53051 15.625 6.11629 15.625C5.70208 15.625 5.36629 15.9608 5.36629 16.375H6.86629ZM6.11629 17.688H5.36629C5.36629 17.6958 5.36641 17.7036 5.36666 17.7114L6.11629 17.688ZM4.91899 19L4.89219 19.7495C4.90986 19.7502 4.92754 19.7502 4.9452 19.7496L4.91899 19ZM3.72267 17.687L4.47228 17.711C4.47254 17.703 4.47267 17.695 4.47267 17.687L3.72267 17.687ZM4.47267 16.14C4.47267 15.7258 4.13688 15.39 3.72267 15.39C3.30845 15.39 2.97267 15.7258 2.97267 16.14H4.47267ZM4.52022 9.49902C4.106 9.49902 3.77022 9.83481 3.77022 10.249C3.77022 10.6632 4.106 10.999 4.52022 10.999V9.49902ZM18.88 10.999C19.2942 10.999 19.63 10.6632 19.63 10.249C19.63 9.83481 19.2942 9.49902 18.88 9.49902V10.999ZM18.0349 16.374C18.0349 15.9598 17.6991 15.624 17.2849 15.624C16.8707 15.624 16.5349 15.9598 16.5349 16.374H18.0349ZM17.2849 17.687L18.0335 17.7336C18.0344 17.7181 18.0349 17.7026 18.0349 17.687H17.2849ZM17.8602 18.8173L18.2561 18.1803L18.2561 18.1803L17.8602 18.8173ZM19.1033 18.8173L18.7074 18.1803L18.7074 18.1803L19.1033 18.8173ZM19.6785 17.687H18.9285C18.9285 17.7026 18.929 17.7181 18.93 17.7336L19.6785 17.687ZM20.4285 16.14C20.4285 15.7258 20.0928 15.39 19.6785 15.39C19.2643 15.39 18.9285 15.7258 18.9285 16.14H20.4285ZM5.85012 12.75C5.4359 12.75 5.10012 13.0858 5.10012 13.5C5.10012 13.9142 5.4359 14.25 5.85012 14.25V12.75ZM6.82512 14.25C7.23933 14.25 7.57512 13.9142 7.57512 13.5C7.57512 13.0858 7.23933 12.75 6.82512 12.75V14.25ZM16.5751 12.75C16.1609 12.75 15.8251 13.0858 15.8251 13.5C15.8251 13.9142 16.1609 14.25 16.5751 14.25V12.75ZM17.5501 14.25C17.9643 14.25 18.3001 13.9142 18.3001 13.5C18.3001 13.0858 17.9643 12.75 17.5501 12.75V14.25ZM5.36629 16.375V17.688H6.86629V16.375H5.36629ZM5.36666 17.7114C5.37622 18.0175 5.14582 18.2416 4.89278 18.2505L4.9452 19.7496C6.05927 19.7106 6.90017 18.7608 6.86593 17.6646L5.36666 17.7114ZM4.94579 18.2505C4.69273 18.2415 4.46248 18.0171 4.47228 17.711L2.97305 17.663C2.93793 18.7592 3.77813 19.7097 4.89219 19.7495L4.94579 18.2505ZM4.47267 17.687V16.14H2.97267V17.687H4.47267ZM4.52022 10.999H18.88V9.49902H4.52022V10.999ZM16.5349 16.374V17.687H18.0349V16.374H16.5349ZM16.5364 17.6404C16.4912 18.3667 16.8425 19.0678 17.4642 19.4543L18.2561 18.1803C18.1138 18.0919 18.0217 17.9219 18.0335 17.7336L16.5364 17.6404ZM17.4642 19.4543C18.0887 19.8424 18.8747 19.8424 19.4992 19.4543L18.7074 18.1803C18.5678 18.2671 18.3957 18.2671 18.2561 18.1803L17.4642 19.4543ZM19.4992 19.4543C20.121 19.0678 20.4723 18.3667 20.4271 17.6404L18.93 17.7336C18.9417 17.9219 18.8497 18.0919 18.7074 18.1803L19.4992 19.4543ZM20.4285 17.687V16.14H18.9285V17.687H20.4285ZM5.85012 14.25H6.82512V12.75H5.85012V14.25ZM16.5751 14.25H17.5501V12.75H16.5751V14.25Z" fill="currentColor"></path> </g></svg>
                            <span className="text-xs capitalize ml-1">property ads</span>
                        </button>
                        <div id="mega-menu-full-dropdown" class="hidden mt-1 border-gray-200 shadow-sm border-y bg-white absolute top-6 w-full max-w-screen-xl rounded-lg">
                            <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
                                <ul>
                                    <li>
                                        <div class="flex flex-col p-3 rounded-lg hover:bg-gray-100">
                                            <div class="font-semibold inline-flex items-center hover:text-primary mb-2">
                                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M4 17.5L3 12L12 9L21 12L20 17.5M5 11.3333V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V11.3333M10 5V3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5M2 21C3 22 6 22 8 20C10 22 14 22 16 20C18 22 21 22 22 21" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                <span>Boats</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">Houseboats</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">Poonton boats</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">Power boats</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">sail boats</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex flex-col p-3 rounded-lg hover:bg-gray-100">
                                            <div class="font-semibold inline-flex items-center hover:text-primary mb-2">
                                                <svg className="w-6 h-6 mr-2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs><g data-name="Layer 2" id="Layer_2"> <path class="cls-1" d="M25,1H21A5,5,0,0,1,11,1H7L1,4v6L7,8V31H25V8l6,2V4Z"></path> </g> </g></svg>
                                                <span>Clothes</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">Men</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">Shoes</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">soks</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">womens</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div class="flex flex-col p-3 rounded-lg hover:bg-gray-100">
                                            <div class="font-semibold inline-flex items-center hover:text-primary mb-2">
                                                <svg className="w-6 h-6 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentColor" d="M361.155 91.245l-18 .193.42 38.98c-45.773 13.285-108.533 19.738-166.474 23.573 35.097 96.284 99.357 173.77 157.845 257.13 20.718-19.655 51.11-31.983 83.46-36.01-20.8-18.109-36.634-27.966-58.833-70.438 31.27 37.085 52.579 48.467 77.623 62.006 3.263-13.094 8.938-24.638 18.721-32.674 8.667-7.12 20.026-10.654 33.53-10.344-46.874-59.763-101.67-117.054-127.83-189.435l-.462-42.98zM163.25 102.92l-17.998.244s.25 18.34.56 36.97c.156 9.316.325 18.703.489 25.929.06 2.636.117 4.58.174 6.542-34.378 83.733-69.154 160.993-123.92 233.442 33.635-1.387 66.326-1.203 98.552-.041 22.263-62.617 23.346-134.855 35.627-202.006 11.417 68.562 10.566 139.445 33.483 205.83 42.962 3.082 85.69 7.198 129.35 10.926-55.67-79.151-118.213-155.037-155.118-249.365-.05-1.782-.1-3.396-.152-5.737-.162-7.156-.333-16.523-.488-25.82-.31-18.594-.559-36.914-.559-36.914z"></path></g></svg>
                                                <span>Campers</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">motorhomes</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">travel trailers</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">truck campers</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary invisible">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">truck campers</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex flex-col p-3 rounded-lg hover:bg-gray-100">
                                            <div class="font-semibold inline-flex items-center hover:text-primary mb-2">
                                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 20V22.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 20V22.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 4V1.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 4V1.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 12H4.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5 12H17" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 6.5H4.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5 6.5H17" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 17.5H4.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5 17.5H17" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                <span>Campers</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">cellphones</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">computers</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">smart home</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">smart watches</span>
                                            </div>
                                            <div className="inline-flex items-center mb-3 text-gray-500 hover:text-primary">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path> </g></svg>
                                                <span class="text-sm capitalize">TV & video</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="focus:outline-none hover:text-primary text-xs font-medium capitalize mx-2">Home</button>
                        <button className="focus:outline-none hover:text-primary text-xs font-medium capitalize mx-2">blogs</button>
                        <button className="focus:outline-none hover:text-primary text-xs font-medium capitalize mx-2">contact us</button>
                    </div>
                </div>
            </div>
            <nav class="bg-[#F5EDDC] border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Brand Name</span>
                    </a>
                    <div class="flex justify-between items-center md:order-2">
                        <button className="inline-flex items-center mr-4 hover:text-primary">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentColor" d="M18.5 46v-6a6 6 0 0 0-4.243 10.243L18.5 46ZM42 52h104V40H42v12Zm118 14v60h12V66h-12Zm-14 74H62v12h84v-12ZM42 40H18.5v12H42V40Zm6 86V76.127H36V126h12ZM14.257 50.243l18.814 18.813 8.485-8.485-18.813-18.814-8.486 8.486ZM48 76.127a22 22 0 0 0-6.444-15.556l-8.485 8.485A10 10 0 0 1 36 76.127h12ZM62 140c-7.732 0-14-6.268-14-14H36c0 14.359 11.64 26 26 26v-12Zm98-14c0 7.732-6.268 14-14 14v12c14.359 0 26-11.641 26-26h-12Zm-14-74c7.732 0 14 6.268 14 14h12c0-14.36-11.641-26-26-26v12Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M66 84h76m-76 24h44"></path></g></svg>
                            <span className="text-sm">Messages</span>
                        </button>
                        <button className="inline-flex items-center mr-4 hover:text-primary">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM7.00061 16.4209C6.68078 16.1577 6.20813 16.2036 5.94491 16.5234C5.68169 16.8432 5.72758 17.3159 6.04741 17.5791L7.00061 16.4209ZM2.34199 13.4115C2.54074 13.7749 2.99647 13.9084 3.35988 13.7096C3.7233 13.5108 3.85677 13.0551 3.65801 12.6917L2.34199 13.4115ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219ZM9.42605 18.3219C8.63014 17.6945 7.82129 17.0963 7.00061 16.4209L6.04741 17.5791C6.87768 18.2624 7.75472 18.9144 8.49742 19.4999L9.42605 18.3219ZM3.65801 12.6917C3.0968 11.6656 2.75 10.5033 2.75 9.1371H1.25C1.25 10.7746 1.66995 12.1827 2.34199 13.4115L3.65801 12.6917Z" fill="currentColor"></path> </g></svg>
                            <span className="text-sm">Favorites</span>
                        </button>
                        <button className="inline-flex items-center mr-4 hover:text-primary">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            <span className="text-sm">Login</span>
                        </button>
                        <button type="button" class="text-[#FF5656] hover:text-white bg-transparent hover:bg-[#FF5656] border-2 border-[#FF5656] focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 inline-flex items-center">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span>Sell Now</span>
                        </button>
                        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-[45%] md:order-1" id="navbar-cta">
                        {/* search input */}
                        <div className="w-[40%] mr-1 flex items-center justify-between">
                            <input className="w-full p-2.5 rounded-sm z-20 text-sm text-gray-900 border-none focus:outline-none" type="text" placeholder="Enter a Location" />
                        </div>
                        <div class="flex w-full">
                            <div class="relative w-full flex justify-center items-center bg-transparent">
                                <input type="search" id="search-dropdown" class="flex-1 p-2.5 w-full z-20 rounded-sm text-sm text-gray-900 border-none focus:outline-none" placeholder="Find Cars, Bikes, Trucks etc..." required />
                                <button type="submit" class="p-2.5 text-sm font-medium h-full text-white bg-black hover:bg-white hover:border-2 border-[black] focus:outline-none hover:text-black">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;