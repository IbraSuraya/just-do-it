# React + Vite

## Component
<img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:dec84b69695ec249fbfb88729fcca08220220417220440.jpeg" width=300 ><br/>
1. ContactApp (merah) : Sebagai parent yang menampung seluruh UI yang ditampilkan, termasuk lokasi di mana data contacts berada.
2. ContactList (kuning) : Sebagai container dalam membuat list contact.
3. ContactItem (hijau) : Sebagai container dalam menampilkan item contact.
4. ContactItemImage (biru) : Menampilkan gambar contact.
5. ContactItemBody (ungu) : Menampilkan data nama dan tag sosial media dari kontak.

## Contact App V2
<img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:0149b3a89bd671e90b0f9035b989ed6520220419131532.gif" width=300 ><br/>

## propsType
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Component</th>
    <th class="tg-0pky">Props</th>
    <th class="tg-0pky">Type Data</th>
    <th class="tg-0pky">Required</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">ContactInput</td>
    <td class="tg-0pky">addContact</td>
    <td class="tg-0pky">func</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="5">ContactItem</td>
    <td class="tg-0pky">imageUrl</td>
    <td class="tg-0pky">string</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">name</td>
    <td class="tg-0pky">string</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">tag</td>
    <td class="tg-0pky">string</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">id</td>
    <td class="tg-0pky">number</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">onDelete</td>
    <td class="tg-0pky">func</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">ContactItemBody</td>
    <td class="tg-0pky">name</td>
    <td class="tg-0pky">string</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">tag</td>
    <td class="tg-0pky">string</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">ContactItemImage</td>
    <td class="tg-0pky">imageUrl</td>
    <td class="tg-0pky">string</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0lax">name</td>
    <td class="tg-0lax">string</td>
    <td class="tg-0lax">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">ContactList</td>
    <td class="tg-0pky">contacts</td>
    <td class="tg-0pky">array of obj</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">onDelete</td>
    <td class="tg-0pky">func</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">DeleteButton</td>
    <td class="tg-0pky">id</td>
    <td class="tg-0pky">number</td>
    <td class="tg-0pky">yes</td>
  </tr>
  <tr>
    <td class="tg-0pky">onDelete</td>
    <td class="tg-0pky">func</td>
    <td class="tg-0pky">yes</td>
  </tr>
</tbody>
</table>