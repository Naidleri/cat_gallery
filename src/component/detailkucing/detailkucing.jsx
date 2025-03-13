import React from "react";
import Navbar from "../navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Detailkucing = () => {
  const { jenis } = useParams();

  const getImage = (jenis) => {
    switch (jenis) {
      case "persia":
        return (
          <div>
            <Navbar />
            <div className="link mt-10 mx-auto max-w-[1300px] font-normal flex ">
              <Link to="/" className="m-6 sm:text-sm md:text-xl">
                Home
              </Link>
              <MdOutlineKeyboardDoubleArrowRight
                className="relative top-8"
                style={{ transform: "scale (1,1) " }}
              />
              <Link
                to="/detailkucing/persia"
                className=" m-6 sm:text-sm md:text-xl"
              >
                Persia
              </Link>
            </div>
            <div className="  mx-auto  max-w-[1300px] pb-10 ">
              <h1 className=" tracking-wide sm:text-sm md:text-xl m-6">
                Kucing Persia merupakan salah satu ras kucing yang paling
                populer dan dikagumi di seluruh dunia. Kucing ini terkenal
                karena keindahan bulu yang panjang, wajah datar, dan ciri khas
                mata besar yang mencuri perhatian. Selain itu, sifatnya yang
                lembut, manis, dan penuh kasih membuatnya menjadi pilihan
                favorit sebagai hewan peliharaan di banyak keluarga
                <br /> <br /> Ciri fisik yang paling menonjol dari kucing Persia
                adalah bulunya yang tebal, halus, dan panjang. Bulu ini biasanya
                datang dalam berbagai warna dan pola, termasuk putih, hitam,
                cokelat, krim, abu-abu, dan sebagainya. Kucing Persia juga
                memiliki ekor yang lebat dan bulu di sekitar leher yang
                membentuk seperti kerah, menambah kesan kemewahan
                <br /> <br />
                Selain penampilan yang memukau, kucing Persia juga dikenal
                karena karakternya yang lembut dan tenang. Mereka cenderung
                menjadi kucing yang santai dan tidak terlalu aktif, sehingga
                cocok untuk dijadikan hewan peliharaan di dalam rumah. Mereka
                sangat menyukai perhatian dan kasih sayang dari pemiliknya, dan
                sering kali akan bermain dengan penuh kelembutan. Namun, perlu
                diingat bahwa kucing Persia juga memerlukan perawatan khusus
                karena bulunya yang panjang dan tebal. Rutin menyisir dan
                membersihkan bulu mereka adalah suatu keharusan agar mereka
                tetap terlihat cantik dan sehat
                <br /> <br /> Selain itu, pemilik kucing Persia juga harus
                memerhatikan kesehatan mata mereka, karena bentuk wajah datar
                mereka membuat mereka rentan terhadap masalah mata. Secara
                keseluruhan, kucing Persia adalah hewan peliharaan yang
                mengagumkan dan penuh pesona. Dengan kombinasi keindahan fisik,
                sifat yang lembut, dan karakter yang manis, mereka menjadi teman
                yang setia dan penghuni rumah yang menyenangkan. Jika Anda
                mencari kucing yang menawan dan penyayang, kucing Persia adalah
                pilihan yang sangat tepat
              </h1>
            </div>
          </div>
        );
      case "siamese":
        return (
          <div>
            <Navbar />
            <div className="link mt-10 mx-auto max-w-[1300px] font-normal flex ">
              <Link to="/" className="m-6 sm:text-sm md:text-xl">
                Home
              </Link>
              <MdOutlineKeyboardDoubleArrowRight
                className="relative top-8"
                style={{ transform: "scale (1,1) " }}
              />
              <Link
                to="/detailkucing/siamese"
                className=" m-6 sm:text-sm md:text-xl"
              >
                Siamese
              </Link>
            </div>
            <div className="  mx-auto  max-w-[1300px] pb-10 ">
              <h1 className=" tracking-wide sm:text-sm md:text-xl m-6">
                Siamese adalah salah satu ras kucing yang paling populer dan
                memiliki ciri khas yang unik. Mereka memiliki tubuh yang ramping
                dan elegan, dengan ciri khas bulu yang pendek dan halus. Warna
                bulu Siamese biasanya bervariasi dari putih, cokelat, abu-abu,
                hingga hitam
                <br /> <br /> Yang membuat Siamese begitu menarik adalah matanya
                yang berwarna biru cerah dan intens. Matanya sering kali menjadi
                daya tarik utama dari kucing Siamese. Selain itu, mereka juga
                memiliki telinga yang besar dan segitiga, serta moncong yang
                tirus
                <br /> <br />
                Sifat Siamese juga sangat menarik. Mereka adalah kucing yang
                cerdas, sosial, dan penuh kasih sayang. Mereka sangat menyukai
                perhatian dan dapat menjadi kucing yang setia terhadap
                pemiliknya. Siamese juga suka berbicara dan sering kali
                berkomunikasi dengan pemiliknya melalui suara mereka yang khas
                <br /> <br /> Kucing Siamese memiliki sejarah yang kaya dan
                telah menjadi favorit di berbagai budaya di seluruh dunia.
                Mereka sering dianggap sebagai simbol kemewahan dan keanggunan.
                Dengan semua karakteristik unik dan kepribadian menariknya,
                tidak mengherankan jika Siamese menjadi salah satu ras kucing
                yang paling dicintai oleh banyak orang di seluruh dunia. Semoga
                penjelasan ini membantu Anda lebih mengenal kucing ras Siamese
                dengan lebih baik
              </h1>
            </div>
          </div>
        );
      case "bengal":
        return (
          <div>
            <Navbar />
            <div className="link mt-10 mx-auto max-w-[1300px] font-normal flex ">
              <Link to="/" className="m-6 sm:text-sm md:text-xl">
                Home
              </Link>
              <MdOutlineKeyboardDoubleArrowRight
                className="relative top-8"
                style={{ transform: "scale (1,1) " }}
              />
              <Link
                to="/detailkucing/bengal"
                className=" m-6 sm:text-sm md:text-xl"
              >
                Bengal
              </Link>
            </div>
            <div className="  mx-auto  max-w-[1300px] pb-10 ">
              <h1 className=" tracking-wide sm:text-sm md:text-xl m-6">
                Kucing Bengal adalah ras kucing yang menakjubkan dan eksotis.
                Mereka memiliki penampilan yang mirip dengan kucing liar
                Leopard, dengan bulu berwarna dan corak yang mengesankan
                <br /> <br /> Bulu kucing Bengal biasanya bercorak seperti macan
                tutul atau belang, dengan kombinasi warna cokelat, kuning, dan
                oranye yang mencolok. Corak bulu ini membuat mereka terlihat
                seperti kucing hutan yang eksotis dan menakjubkan. Selain corak
                bulu yang menarik, kucing Bengal juga memiliki tubuh yang
                atletis dan kekar. Mereka memiliki otot yang kuat dan tubuh yang
                lentur, menjadikan mereka kucing yang lincah dan aktif. Kucing
                Bengal juga memiliki mata yang besar dan berwarna hijau atau
                kuning, yang menambah daya tarik dan pesona mereka
                <br /> <br />
                Sifat kucing Bengal juga sangat menarik. Mereka adalah kucing
                yang cerdas, aktif, dan penuh energi. Mereka suka bermain dan
                berpetualang, dan sering kali menunjukkan perilaku yang mirip
                dengan kucing liar. Meskipun aktif, mereka juga bisa menjadi
                kucing yang manis dan setia terhadap pemiliknya
                <br /> <br />
                Kucing Bengal adalah hasil persilangan antara kucing domestik
                dan kucing hutan Asia. Kombinasi unik ini menciptakan ras kucing
                yang sangat istimewa dan unik. Dengan kecantikan dan kepribadian
                yang luar biasa, kucing Bengal telah menjadi salah satu ras
                kucing yang paling diminati dan diidamkan oleh para pecinta
                kucing di seluruh dunia. Semoga penjelasan ini membantu Anda
                lebih mengenal kucing ras Bengal dengan lebih mendalam
              </h1>
            </div>
          </div>
        );
      case "ragdoll":
        return (
          <div>
            <Navbar />
            <div className="link mt-10 mx-auto max-w-[1300px] font-normal flex ">
              <Link to="/" className="m-6 sm:text-sm md:text-xl">
                Home
              </Link>
              <MdOutlineKeyboardDoubleArrowRight
                className="relative top-8"
                style={{ transform: "scale (1,1) " }}
              />
              <Link
                to="/detailkucing/ragdoll"
                className=" m-6 sm:text-sm md:text-xl"
              >
                Ragdoll
              </Link>
            </div>
            <div className="  mx-auto  max-w-[1300px] pb-10 ">
              <h1 className=" tracking-wide sm:text-sm md:text-xl m-6">
                Kucing Ragdoll adalah ras kucing yang memiliki sifat dan
                penampilan yang sangat mengagumkan. Nama "Ragdoll" diberikan
                kepada ras kucing ini karena sifat mereka yang santai dan tenang
                ketika diangkat, seperti boneka yang lemas. Mereka sering kali
                relaks dan menjadi lemas saat diangkat, sehingga mereka tampak
                seperti boneka yang sedang digendong
                <br /> <br /> Bulu kucing Ragdoll adalah salah satu fitur paling
                menonjol dari ras ini. Bulu mereka lembut, tebal, dan halus
                seperti sutra, dengan corak dan warna yang indah. Mereka
                biasanya memiliki corak berwarna seperti bicolor atau mitted,
                yang menambah pesona dan daya tarik mereka. Selain bulu yang
                indah, kucing Ragdoll juga memiliki ukuran tubuh yang besar dan
                berotot. Mereka memiliki postur tubuh yang kokoh dan berat badan
                yang cukup berat. Meskipun begitu, mereka adalah kucing yang
                lembut dan ramah, dan mereka sangat menyukai perhatian dan kasih
                sayang dari pemiliknya
                <br /> <br />
                Kucing Ragdoll adalah ras kucing yang sangat ramah dan penuh
                kasih. Mereka biasanya sangat akrab dengan pemiliknya dan suka
                berada di dekat mereka. Mereka juga sangat baik dengan anak-anak
                dan hewan peliharaan lainnya, membuat mereka menjadi kucing yang
                sempurna untuk keluarga
                <br /> <br />
                Ras kucing Ragdoll berasal dari Amerika Serikat, dan sejak itu
                telah menjadi salah satu ras kucing paling populer di dunia.
                Kecantikan, kepribadian yang lembut, dan sifat yang penuh kasih
                membuat kucing Ragdoll menjadi pilihan favorit bagi banyak
                pecinta kucing di seluruh dunia. Semoga dengan penjelasan ini,
                Anda dapat lebih mengenal dan menyukai kucing ras Ragdoll.
                Mereka adalah kucing yang luar biasa, dan memiliki pesona yang
                tak tertandingi
              </h1>
            </div>
          </div>
        );
      case "norwegian":
        return (
          <div>
            <Navbar />
            <div className="link mt-10 mx-auto max-w-[1300px] font-normal flex ">
              <Link to="/" className="m-6 sm:text-sm md:text-xl">
                Home
              </Link>
              <MdOutlineKeyboardDoubleArrowRight
                className="relative top-8"
                style={{ transform: "scale (1,1) " }}
              />
              <Link
                to="/detailkucing/norwegian"
                className=" m-6 sm:text-sm md:text-xl"
              >
                Norwegian Forest
              </Link>
            </div>
            <div className="  mx-auto  max-w-[1300px] pb-10 ">
              <h1 className=" tracking-wide sm:text-sm md:text-xl m-6">
                Kucing Norwegian Forest, juga dikenal sebagai "Skogkatt" di
                Norwegia, memiliki bulu yang tebal dan lebat, dengan lapisan
                ganda yang melindunginya dari cuaca dingin di daerah asalnya.
                Bulu mereka sangat indah, dengan warna dan corak yang beragam,
                menambah pesona dan keunikan mereka
                <br /> <br /> Kucing ras ini memiliki tubuh yang kokoh dan kuat,
                dengan otot yang terlihat. Postur tubuhnya yang anggun dan gagah
                membuat mereka terlihat seperti kucing hutan yang gagah. Mereka
                juga memiliki ekor yang lebat dan panjang, menambah keelokan dan
                daya tarik mereka.Selain kecantikan fisiknya, kucing Norwegian
                Forest juga memiliki sifat yang menarik. Mereka adalah kucing
                yang cerdas, berani, dan mandiri. Mereka suka menjelajah dan
                mengeksplorasi lingkungan sekitar mereka, mengingatkan kita pada
                kucing-kucing hutan yang liar dan tangguh
                <br /> <br />
                Kucing Norwegian Forest sangat akrab dengan alam dan lingkungan
                luar. Mereka adalah pemburu yang terampil dan suka bermain di
                luar ruangan. Namun, mereka juga bisa menjadi kucing yang lembut
                dan penyayang terhadap pemiliknya. Ras kucing ini berasal dari
                Norwegia, di mana mereka telah hidup di lingkungan alam liar dan
                hutan selama berabad-abad. Kehidupan mereka di alam liar telah
                membentuk sifat dan penampilan mereka yang unik dan menarik
                <br /> <br />
                Kucing Norwegian Forest adalah sahabat setia yang akan menemani
                Anda dengan kesetiaan dan cinta. Keindahan mereka yang alami dan
                sifatnya yang mandiri membuat mereka menjadi kucing yang
                istimewa dan tak terlupakan. Semoga dengan penjelasan ini, Anda
                dapat lebih mengenal dan mengapresiasi keindahan kucing ras
                Norwegian Forest. Mereka adalah kucing yang luar biasa dengan
                pesona alam dan keanggunan yang memukau hati
              </h1>
            </div>
          </div>
        );
      case "scottish":
        return (
          <div>
            <Navbar />
            <div className="link mt-10 mx-auto max-w-[1300px] font-normal flex ">
              <Link to="/" className="m-6 sm:text-sm md:text-xl">
                Home
              </Link>
              <MdOutlineKeyboardDoubleArrowRight
                className="relative top-8"
                style={{ transform: "scale (1,1) " }}
              />
              <Link
                to="/detailkucing/ragdoll"
                className=" m-6 sm:text-sm md:text-xl"
              >
                Ragdoll
              </Link>
            </div>
            <div className="  mx-auto  max-w-[1300px] pb-10 ">
              <h1 className=" tracking-wide sm:text-sm md:text-xl m-6">
                Kucing Scottish Fold memiliki ciri khas yang paling menonjol,
                yaitu telinga mereka yang melipat ke bawah ke arah depan kepala.
                Telah disebutkan bahwa ini adalah hasil dari mutasi genetik yang
                langka, yang memberi mereka penampilan yang sangat istimewa dan
                menggemaskan
                <br /> <br /> Telinga mereka yang melipat memberikan kucing
                Scottish Fold tampilan yang lucu dan menggemaskan, seolah-olah
                mereka selalu terlihat sedang berpikir atau bertanya-tanya
                tentang sesuatu. Telinga mereka juga memberikan mereka ekspresi
                wajah yang unik, membuat mereka selalu terlihat menggemaskan dan
                menghibur. Selain telinga mereka yang unik, kucing Scottish Fold
                juga memiliki tubuh yang kecil dan bulat, dengan mata bundar
                yang besar dan ekspresif. Bulu mereka bisa berbagai warna dan
                corak, menambah pesona mereka yang menggemaskan
                <br /> <br />
                Kucing ras ini juga dikenal sebagai kucing yang ramah,
                penyayang, dan lembut. Mereka adalah teman setia yang akan
                selalu ingin berada di dekat Anda, menyediakan kenyamanan dan
                kehangatan dengan kehadiran mereka. Kucing Scottish Fold juga
                sangat cocok untuk keluarga, karena sifat mereka yang lembut dan
                ramah terhadap anak-anak dan hewan peliharaan lainnya. Mereka
                mudah bergaul dan selalu siap bermain dan berinteraksi dengan
                orang-orang di sekitar mereka
                <br /> <br />
                Kucing Scottish Fold adalah hadiah indah dari alam, dengan
                telinga mereka yang unik dan sifat mereka yang lembut. Mereka
                adalah kucing yang mengundang senyum dan kebahagiaan, dan
                kehadiran mereka di rumah akan selalu membawa keceriaan dan
                kehangatan. Semoga dengan penjelasan ini, Anda dapat lebih
                mengenal dan mengapresiasi keindahan kucing ras Scottish Fold.
                Mereka adalah kucing yang istimewa dan tak terlupakan, dengan
                pesona yang selalu menyenangkan dan menghibur hati
              </h1>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h1>{getImage(jenis)}</h1>
    </div>
  );
};
export default Detailkucing;
