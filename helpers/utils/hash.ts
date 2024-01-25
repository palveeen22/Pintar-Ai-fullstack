// Untuk install nya pakai npm i --save-dev @types/bcryptjs
// Mengimpor modul bcryptjs dan menyimpannya dalam variabel bcryptjs.
import bcryptjs from "bcryptjs";

// Mendefinisikan fungsi hashText yang mengambil string (text)
// Mengembalikan hasil hash dari string tersebut menggunakan fungsi hashSync dari modul bcryptjs
export const hashText = (text: string): string => bcryptjs.hashSync(text);

// Mendefinisikan fungsi compareTextWithHash yang mengambil dua parameter, yaitu string (text) dan hash (hash),
// Mengembalikan nilai boolean yang menunjukkan apakah string tersebut sesuai dengan hash yang diberikan.
// Fungsi ini menggunakan compareSync dari modul bcryptjs untuk membandingkan teks dengan hash.
export const compareTextWithHash = (text: string, hash: string): boolean =>
  bcryptjs.compareSync(text, hash);
