import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main class="flex h-screen bg-[#ADD8E6]">
      <div></div>
      <div class="container mx-auto px-40">
          <Image width={100} height={100} class="mx-auto mt-48 object-cover h-36 w-36 rounded-full" src="/assets/cinnamoroll.jpg" alt="Profile"  />
          <p class="flex mx-auto mt-1 justify-center font-sans text-2xl text-river-blue">cinnamoroll</p>
          <Link class="flex mx-auto justify-center mt-4" href="https://www.cktravels.com/themed-7-elevens-taipei-taiwan/">
            <button class="w-[48rem] rounded-lg p-3 bg-[#FFFFFF] transition: ease-in-out delay-10 outline outline-[#E8A1AE] hover:bg-[#2985B9] hover:text-white duration-100">Pompurin and Cinnamoroll Changhong 7-Eleven in Taipei, Taiwan</button>
          </Link>
          <Link class="flex mx-auto justify-center mt-4" href="https://www.siliconera.com/hatsune-miku-colorful-stage-sanrio-collaboration-event-detailed/">
            <button class="w-[48rem] rounded-lg p-3 bg-[#FFFFFF] transition: ease-in-out delay-10 outline outline-[#E8A1AE] hover:bg-[#2985B9] hover:text-white duration-100">Hatsune Miku: Colorful Stage! video game collaboration with Sanrio characters</button>
          </Link>
          <Link class="flex mx-auto justify-center mt-4" href="https://www.cbr.com/hello-kitty-and-friends-best-anime-ranked/">
            <button class="w-[48rem] rounded-lg p-3 bg-[#FFFFFF] transition: ease-in-out delay-10 outline outline-[#E8A1AE] hover:bg-[#2985B9] hover:text-white duration-100">Hello Kitty: Stump Village animated series featuring Cinnamoroll</button>
          </Link>
          <Link class="flex mx-auto justify-center mt-4" href="https://www.ign.com/wikis/animal-crossing-new-horizons/Sanrio_Items_List">
            <button class="w-[48rem] rounded-lg p-3 bg-[#FFFFFF] transition: ease-in-out delay-10 outline outline-[#E8A1AE] hover:bg-[#2985B9] hover:text-white duration-100">Sanrio Items List</button>
          </Link>
          <Link class="flex mx-auto justify-center mt-4" href="https://www.bangkokpost.com/thailand/pr/1966423/eva-air-hello-kitty-flight-br5288-takes-off-for-fun">
            <button class="w-[48rem] rounded-lg p-3 bg-[#FFFFFF] transition: ease-in-out delay-10 outline outline-[#E8A1AE] hover:bg-[#2985B9] hover:text-white duration-100">EVA Air Hello Kitty-themed flights featuring Cinnamoroll</button>
          </Link>
          <Link class="flex mx-auto justify-center mt-4" href="https://www.sanrio.com/collections/cinnamoroll">
            <button class="w-[48rem] rounded-lg p-3 bg-[#FFFFFF] transition: ease-in-out delay-10 outline outline-[#E8A1AE] hover:bg-[#2985B9] hover:text-white duration-100">Cinnamoroll official Sanrio website</button>
          </Link>
      </div> 
    </main>
  );
}
