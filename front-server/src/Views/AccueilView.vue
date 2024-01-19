<template>
    <div>
        <div class="w-100 pt-12 bg-home">
            <div class="bg-page ml-24 mr-24 rounded-tl-2xl rounded-tr-2xl flex">
                <div class="p-3 flex">
                    <div class="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div class="w-4 h-4 bg-orange-400 rounded-full ml-1"></div>
                    <div class="w-4 h-4 bg-green-500 rounded-full ml-1"></div>
                </div>
                <div class="flex-none">
                    <img src="@/assets/pp.png" class="w-72 h-72 rounded-full mt-36 mb-36"/>
                </div>
                <div class="flex flex-col justify-center ml-24 mr-24 text-left">
                    <h1 class="text-white text-6xl">Hello, c'est Lucas</h1>
                    <p class="text-white mt-2">Étudiant / Alternant</p>
                    <p class="text-white text-2xl">En tant qu'étudiant en BTS SIO (Services Informatiques aux Organisations), je suis passionné par l'informatique et plus particulièrement par la programmation. Je suis constamment à la recherche de nouvelles connaissances et compétences pour me développer dans le domaine du développement web.</p>
                </div>
            </div>
        </div>
        <div>
            <h2 class="text-5xl mt-16 text-center">Mes compétences :</h2>
            <div class="flex justify-center">
                <div class="w-300">
                    <p class="text-4xl">Programmation</p>
                    <div>
                        <p>HTML/CSS, PHP, JavaScript, Vue, React, Tailwind, Flutter, C#, Python, Wordpress, SQL</p>
                    </div>
                </div>
                <div class="w-300">
                    <p class="text-4xl">Graphisme</p>
                    <div>
                        <p>Figma, Adobe XD,Illustrator</p>
                    </div>
                </div>
                <div class="w-300">
                    <p class="text-4xl">Informatiques</p>
                    <div>
                        <p>MacOS, Windows</p>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="bg-[#0f4c81] text-center py-20">
            <h2 class="text-5xl text-white mb-6">Mon CV :</h2>
            <div class="mb-20">
                <p class="text-white">Pour en savoir plus sur mon parcours, vous pouvez télécharger mon Curriculum Vitae ci dessous :</p>
            </div>
            <div>
                <a class="text-3xl text-white border-2 p-4 rounded-2xl mt-5 hover:bg-sky-700" @click="telechargerCV">Télécharger mon CV</a>
            </div>
        </div>

        <div class="text-center py-20">
            <h2 class="text-5xl text-black mb-6">Me contacter :</h2>


        </div>





    </div>
</template>
  
  
  
  
<script setup>

    const telechargerCV = () => {
    const urlCV = '/download/CV_Lucas_DE_SAINTE_MARESVILLE.pdf';
    const link = document.createElement('a');

    link.href = urlCV;
    link.setAttribute('download', 'CV Lucas DE SAINTE MARESVILLE');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

</script>