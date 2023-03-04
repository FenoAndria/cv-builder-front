<template>
    <section id="apropos">
        <div class="h-screen pt-20 ">
            <div class="h-full flex justify-center items-center  ">
                <div class="w-1/2">
                    <div class="text-xl space-y-3">
                        <p>{{ profil.bio }}</p>
                        <hr>
                        <div class="space-y-2">
                            <p class="text-xl"><i class="bi bi-envelope"></i>{{ profil.email }}</p>
                            <p class="text-xl"><i class="bi bi-person-heart"></i>{{ profil.dateNaissance }}</p>
                            <p class="text-xl"><i class="bi bi-geo-alt"></i>{{ profil.adresse }}</p>
                            <p class="text-xl"><i class="bi bi-phone"></i>{{ profil.telephone }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="space-y-4 flex flex-col items-center">
                        <div class="">
                            <img :src="'http://localhost:8000' + profil.photo" alt="Photo."
                                class="w-80 h-80 object-cover shadow-lg rounded-lg" />
                        </div>
                        <div class=" text-3xl">
                            <p>{{ profil.nom }} {{ profil.prenom }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'A-Propos',
    data() {
        return {
            isLoading: true
        }
    },
    props: ['profil']
}
</script>