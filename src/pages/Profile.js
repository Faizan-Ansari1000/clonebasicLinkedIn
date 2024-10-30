// Profile.js
import React from 'react';



export default function Profile() {
    return (
        <>
            <div>
                <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-1 m-3">
                    <div className='border'><div class="relative border">
                        <img class="w-full h-48 object-cover rounded-t-lg" src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/321607467_481144524104459_4141334674894471035_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHvxV_81JcJ0K8TZKbQLN8PKhCcRub5sQ0qEJxG5vmxDZhngjj7TzTNiEhwAIwzA-AA2kGNPvT95wXp_y6HIPSz&_nc_ohc=-JqUfOSsXC8Q7kNvgGunWGi&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=ApQJxPPTGCrBR9fSY6N2msk&oh=00_AYCcmdJWV4n5TgMAYrKorR13xF7Hyv7eo-wfF2tuJT3ylw&oe=67282DD1" alt="Cover Image" />
                        <img class="absolute w-32 h-32 rounded-full border-4 border-gray-200 top-32 left-4" src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-1/424586757_374732075293499_5336115622331505308_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGCIHVqpynZzn_yx5L63aeGOCdY1E9yhP04J1jUT3KE_WOaASG0Oe9B1PtC-lWEEntzXJbWni3b98I2KFboUs1t&_nc_ohc=myF2Eey46mIQ7kNvgFS3VYD&_nc_zt=24&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=ApQJxPPTGCrBR9fSY6N2msk&oh=00_AYAMWEOG_Uok0yy9_ORDqlDnS5LTqfAOTAHvAkJHNmoudw&oe=6728142F" alt="Profile Picture" />
                    </div>
                    </div>

                    <div class="p-6 mt-16 ms-4">
                        <h1 class="text-2xl font-bold">Faizan Navaid Ansari</h1>
                        <h2 class="text-gray-600">Beginner</h2>
                        <p class="text-gray-500">Location: House 999 </p>

                        <div class="mt-4">
                            <h3 class="text-lg font-semibold">About</h3>
                            <p class="text-gray-700">I am Web And Mob App Developer Student  of <span className='font-bold'>(SMIT)</span></p>
                            <h1 className='font-bold'>Skills</h1>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>GitHub</p>
                            <p>Tailwind</p>
                            <p>FireBase</p>
                            <p>React Js</p>
                            <p>Bootstrap</p>
                            <p>JavaScript</p>
                        </div>
                        <div className='mt-4 flex items-center justify-center ms-0 text-start'>
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D03AQHkHYEqMcy8Og/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719856521461?e=1735776000&v=beta&t=I3Rb0XjvQeELyjuBWeHe47onfttb8rgvaEtF8kisTPg" daalein
                                    alt="Trainer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>Trainer</h1>
                                <p>Sir Basit Ahmed</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}