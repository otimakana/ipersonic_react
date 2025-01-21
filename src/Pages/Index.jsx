import React from "react";
import Navbar from "../Components/Navbar";


const Index = () => {
    return (
        <>
        <Navbar />
    <div class="jumbotron">
        <div class="container">
            <div class="grid-2">
                <div>
                    <h1 class="font-size-biggest font-weight-lighter">Coba tes kepribadian yang paling terkenal di dunia.<br />
                    <b>Hanya 60 detik</b>.</h1>
                    <br />
                    <a href="test.html" class="btn btn-orange btn-md">Mulai test gratis <i class="fa fa-play icon-sm" aria-hidden="true"></i></a>
                    <br /><br />
                    <small>Dapatkan hasil secepatnya. <b>Tidak membutuhkan pendaftaran</b>.</small>
                </div>
                <div></div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">
            <p class="lead font-weight-lighter"><b>iPersonic dikembangkan oleh psikolog.</b> Felicitas Heyne, pengembang dan pendiri tes kepribadian iPersonic adalah psikolog terkenal dan penulis buku. Beliau adalah anggota afiliasi internasional American Psychological Association (APA).</p>
            <br />
            <a href="test.html" class="btn btn-orange btn-lg">Mulai test gratis <i class="fa fa-play" aria-hidden="true"></i></a>
            <br /><br />
            Dapatkan hasil secepatnya. <b>Tidak membutuhkan pendaftaran.</b>
        </div>
    </div>

    <div class="footer">
        <div class="container">
            <span class="color-grey">© iPersonic</span> <a href="#">Personality Test</a> <a href="#">Career Test</a> <a href="#">Persönlichkeitstest</a> <a href="#">Berufstest</a> <a href="#">Privacy Policy</a> <a href="#">Felicitas Heyne</a> <a href="#">Impressum</a> <a href="#">Help & Contact</a> <span class="color-grey">iPersonic supports</span> <a href="#">Audiopedia Foundation</a>  <br /><br />
            English | Deutsch | Español | Français | Português | 中文 | Русский | हिंदी | العربية | 日本語 | Bahasa Indonesia | Italiano | Svenska | Nederlands | עברית | Afrikaans | Bosanski | Català | Čeština | Hrvatski | Magyar | Română | Slovenski | Slovenský | Srpski | Български
        </div>
    </div>
        </> 
    )
}
export default Index;