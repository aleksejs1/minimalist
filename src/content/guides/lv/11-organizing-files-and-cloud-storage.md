---
title: "Kārtība failos un mākoņos: vienkārša glabāšanas sistēma"
description: "Kā novērst digitālo uzkrāšanu, izveidot failu struktūru pēc PARA metodes, sakārtot fotoarhīvus un ieviest 3-2-1 rezerves kopijas."
order: 11
category: "digital"
publishedDate: 2026-07-18
readingTime: 8
draft: false
---

Tā kā mākoņkrātuves gigabaits šodien maksā nieka centa daļas, cilvēce ir nemanāmi iekritusi jaunā uzmācīgā ieradumā — **digitālajā uzkrāšanā (Digital Hoarding)**.

Mēs glabājam terabaitiem izplūdušu fotoattēlu dublikātu, simtiem pirms trim gadiem uzņemtu ekrānuzņēmumu ar čekiem, ar gigabaitiem pārpildītu mapi «Lejupielādes» un datora darbvirsmu, kas nosēta ar ikonām ar nosaukumiem kā `Ligums_Labots_Gala_v2_FINAL(1).pdf`.

Atšķirībā no fiziskā haosa digitālais juceklis nav fiziski sataustāms: pār to nevar paklupt un tas nekrāj putekļus. Tomēr tas rada **nepārtrauktu kognitīvo berzi**:
- Ikreiz, kad steidzami nepieciešams pases skens, īres līgums vai garantijas talons, jūs pavadāt 15 minūtes izmisīgos meklējumos pa neskaitāmām mapēm un e-pastu sarakstēm.
- Jūs maksājat ikmēneša abonēšanas maksu par paplašinātām mākoņkrātuvēm (Google One, iCloud, Dropbox), lai gan 70% no aizņemtās vietas aizņem digitālie atkritumi.
- Pārpildīti arhīvi uztur fonā klusu trauksmi: mēs baidāmies pazaudēt kaut ko būtisku milzīgā nebūtisku datu gūzmā.

Minimālistiska failu sistēma balstās uz trim vienkāršiem pamatprincipiem: **plakana struktūra dziļu labirintu vietā**, **vienots failu nosaukumu standarts** un **droša 3-2-1 rezerves kopiju stratēģija**.

> «Sarežģīta daudzlīmeņu mapju sistēma ir piemineklis prokrastinācijai. Jo dziļāk iestiepjas mapes, jo ātrāk sistēma pārvēršas par failu kapsētu.»

---

## Hierarhiju sabrukums: kāpēc dziļas mapes vairs nav vajadzīgas

20. gadsimta 90. gados operētājsistēmām nebija ātras fona indeksācijas. Vienīgais veids, kā sakārtot datus, bija veidot dziļus kaskāžu kokus: `Dokumenti → Personīgi → 2024 → Mājoklis → Rēķini → Janvāris`.

Šodien dziļas mapju sistēmas ir kļuvušas par lielāko produktivitātes bremzi:
1. **Klasifikācijas nogurums:** pirms viena faila saglabāšanas jums jāpieņem vairāki lēmumi pēc kārtas: «Vai tas pieder pie Darba, Projektiem vai Finansēm?».
2. **Neredzamās zonas:** faili, kas paslēpti ceturtajā vai piektajā apakšmapē, faktiski pazūd no jūsu apziņas lauka.
3. **Mūsdienu meklēšanas jauda:** iekšējie meklēšanas dzinēji (*Spotlight* operētājsistēmā macOS, *Everything* operētājsistēmā Windows, rīki *Raycast* vai *Alfred*) indeksē saturu zibensātri. Nospiežot taustiņu kombināciju un ievadot divus vārdus, jūs atverat vajadzīgo failu 0,05 sekundēs — ātrāk, nekā paspēsiet uzklikšķināt pirmajai mapei.

**Minimālisma zelta likums: mapju dziļums nedrīkst pārsniegt divus klikšķus (2 līmeņus).**

---

## Failu nosaukumu standarts: ISO 8601 sintakse

Ja faili tiek nosaukti haotiski, pat vislabākā meklēšana neglābs no apjukuma. Digitālā kārtība prasa stingru, mašīnlasāmu nosaukumu struktūru visiem svarīgajiem dokumentiem:

```
UNIVERSIĀLĀ NOSAUKUMA VEIDNE:
┌────────────────────────────────────────────────────────┐
│  GGGG-MM-DD_Kategorija_Iss-Apraksts_v01.paplašinājums  │
└────────────────────────────────────────────────────────┘

PIEMĒRI:
✓ 2026-04-15_Nodokli_Ienakumu-Deklaracija_v01.pdf
✓ 2026-08-01_Auto_Apdrosinasana-KASKO.pdf
✓ 2026-09-10_Veseliba_Asins-Analizes.pdf
✗ Deklaracija_jauna_parakstita.pdf
✗ Skenets_dokuments_00123.jpg
```

### Kāpēc tieši šāds formāts?
- **ISO 8601 (`GGGG-MM-DD` jeb `YYYY-MM-DD`):** starptautisks hronoloģiskais datuma standarts no lielākā uz mazāko (Gads-Mēnesis-Diena). Faili ar šādu datumu nosaukuma sākumā **automātiski sakārtojas ideālā laika secībā** jebkurā sistēmā (Windows, macOS, Linux, mākonī), pat ja faila sistēmas izveides datums tiek nejauši pārrakstīts.
- **Pasvītras un defises:** pasvītra (`_`) atdala nozīmīgākos semantiskos blokus (`Datums_Tēma_Apraksts`), bet defise (`-`) savieno vārdus viena bloka iekšienē. Atteikšanās no atstarpēm nosaukumos novērš kļūdas, pārsūtot datus starp dažādām sistēmām un serveriem.

---

## PARA arhitektūra: 4 mapes visai jūsu dzīvei

Personīgās produktivitātes eksperta Tiago Fortes (*Tiago Forte*) izstrādātā **PARA metode** ir viena no vienkāršākajām un loģiskākajām informācijas pārvaldības sistēmām. Tā sadala visus jūsu digitālos failus (datorā, Google Drive, iCloud vai piezīmēs) tieši **četrās galvenajās mapēs**:

```
/ SĀKUMA DISKS / MĀKONIS
├── 01_Projects/   (Aktīvi darbi ar konkrētu termiņu)
├── 02_Areas/      (Pastāvīgas atbildības jomas bez termiņa)
├── 03_Resources/  (Uzziņu materiāli, veidnes, zināšanu bāze)
└── 04_Archive/    (Pabeigti un neaktīvi materiāli)
```

### 1. `01_Projects` (Projekti)
Materiāli, pie kuriem jūs strādājat **šobrīd**. Katrai mapei šeit ir skaidrs gala rezultāts un beigu termiņš (no vienas nedēļas līdz trim mēnešiem):
- `2026-Q3_minimalist-majaslapas-launss/`
- `2026-05_Vannasistabas-Remonts/`
- `2026-04_Gada-Ienakumu-Deklaracija/`

*Noteikums:* Ja pie projekta nekas nav darīts ilgāk par mēnesi, tas vairs nav aktīvs un tiek pārvietots uz mapi *Archive*. Šajā mapē vienlaikus nevajadzētu atrasties vairāk par 5–10 aktīviem projektiem.

### 2. `02_Areas` (Atbildības jomas)
Jūsu dzīves pastāvīgās sfēras, kurām nepieciešams uzturēt noteiktu kvalitātes standartu, taču tām nav beigu datuma:
- `Veseliba/` (medicīniskie izraksti, receptes, analīžu rezultāti)
- `Finanses/` (bankas izraksti, nodokļu dokumenti, kredītlīgumi)
- `Nekustamais-Ipashums/` (īres līgums, komunālie rēķini, plānojumi)
- `Auto/` (tehniskās apskates lapas, servisa vēsture, apdrošināšana)
- `Dokumenti/` (pasu kopijas, dzimšanas apliecības, diplomi)

### 3. `03_Resources` (Resursi)
Tēmas un uzziņu materiāli, kas jūs interesē vai var noderēt nākotnē:
- `Dizains-un-Srifti/`
- `Edienu-Receptes/`
- `Iericu-Instrukcijas/` (glabājiet sadzīves tehnikas PDF instrukcijas mākonī, bet papīra bukletus izmetiet)
- `Ligumu-Paraugi/`

### 4. `04_Archive` (Arhīvs)
Klusā glabātuve. Šeit nonāk pabeigtie projekti un neaktuālie materiāli:
- Vannasistabas remonts pabeigts? Mape tiek pārcelta uz `04_Archive/2026_Vannasistabas-Remonts/`.
- Pārdevāt automašīnu? Tās mape no *Areas* ceļo uz *Archive*.

Arhīvs atbrīvo jūsu ikdienas redzeslauku, saglabājot visus datus pieejamus caur sistēmas meklētāju.

---

## Fotoarhīvu kārtošana: «Kuratora likums»

Foto galerijas ir lielākā digitālā melnā kaste. Vidusmēra lietotāja telefonā uzkrājas no 10 000 līdz 40 000 fotogrāfiju, no kurām 80% veido digitāls piesārņojums: nejauši dublikāti, ekrānuzņēmumi un izplūduši kadri.

### Foto kārtošanas soļi:

1. **Ekrānuzņēmumu likvidēšana:**
   Lietotnē «Foto» atveriet sadaļu *«Multivides veidi → Ekrānuzņēmumi (Screenshots)»*. Iezīmējiet un izdzēsiet visus uzņēmumus, kas vecāki par 14 dienām. Ekrānuzņēmums ir vienreizēja piezīme, kurai nav vietas dzīves arhīvā.

2. **Automātiska dublikātu apvienošana:**
   Gan Apple Photos, gan Google Photos piedāvā funkciju *«Dublikāti»*. Palaidiet apvienošanu: sistēma saglabās vienu augstākās kvalitātes kadru ar metadatiem, izdzēšot liekās kopijas.

3. **Kuratora likums («Viena labākā bilde»):**
   Pārtrauciet glabāt 25 viena saulrieta vai vakariņu galda fotoattēlus. No katras sērijas atstājiet **tieši vienu labāko kadru**, bet pārējos 24 izdzēsiet uzreiz.

4. **«Izlases» sirsniņu sistēma:**
   Piespiediet izlases sirsniņu tikai tām fotogrāfijām ar emocionālu spēku, kuras jūs vēlēsieties parādīt saviem mazbērniem pēc trīsdesmit gadiem. Ieviesiet decembra tradīciju: atlasīt gada 100 labākos kadrus (*«2026_Labakais»*) un pasūtīt vienas skaistas fotogrāmatas drukāšanu. Taustāma grāmata sniedz tūkstoškārt vairāk siltuma nekā 50 000 aizmirstu failu mākonī.

---

## 3-2-1 Rezerves kopiju likums

Digitālais minimālisms nozīmē noturību pret negaidītām krīzēm. Datora bojājums, nozaudēšana vai mākoņa bloķēšana nedrīkst izdzēst jūsu dzīves datus.

Pasaules kiberdrošības zelta standarts ir **3-2-1 likums**:

```
                       3-2-1 ARHITEKTŪRA:
 ┌───────────────────────────────────────────────────────────────┐
 │ 3 DATU KOPIJAS:                                               │
 │   1 oriģināls datorā + 2 rezerves kopijas.                    │
 ├───────────────────────────────────────────────────────────────┤
 │ 2 DAŽĀDI NESĒJU VEIDI:                                        │
 │   Iekšējais datora NVMe SSD + ārējais cietais disks (HDD/SSD).│
 ├───────────────────────────────────────────────────────────────┤
 │ 1 KOPIJA ĀRPUS MĀJĀM (OFF-SITE):                              │
 │   Šifrēta mākoņkrātuve vai fizisks disks citā ēkā.            │
 └───────────────────────────────────────────────────────────────┘
```

### Minimālistiska ieviešana:
1. **Pamatkopija:** jūsu darba dators.
2. **Vietējā rezerves kopija:** ārējais USB disks (1–2 TB), kas automātiski veido kopijas fonā (*Time Machine* operētājsistēmā macOS vai *File History* operētājsistēmā Windows). Diskam obligāti jābūt šifrētam (FileVault vai BitLocker).
3. **Mākoņa kopija:** svarīgākās mapes (*01_Projects*, *02_Areas*, dokumentu skeni) tiek sinhronizētas ar uzticamu mākoni. Īpaši jutīgiem dokumentiem izmantojiet bezmaksas atvērtā pirmkoda rīku **Cryptomator**, kas izveido šifrētu seifu pirms augšupielādes mākonī.

---

## Inbox Zero: e-pasta atbrīvošana vienā vakarā

Tūkstošiem nelasītu e-pastu pastkastītē rada nemitīgu vainas apziņu. Mēģinājums tos šķirot pa vienam ir nolemts neveiksmei.

### E-pasta «Bankrota» procedūra:
1. E-pasta meklēšanas joslā ievadiet filtru: `before:2026/01/01` (visi e-pasti, kas vecāki par trim mēnešiem).
2. Nospiediet **«Izvēlēties visas atrastās sarunas»**.
3. Nospiediet pogu **«Arhivēt»** (vai pārvietojiet uz mapi `_Vecais_Arhivs`). Nekādā gadījumā nedzēsiet: arhīvā e-pasti paliek atrodami caur meklētāju, taču acumirklī pazūd no ienākošo vēstuļu kastes.
4. Jūs uzreiz iegūstat tīru pastkasti (*Inbox Zero*).
5. **Atteikšanās likums:** No šī brīža katrai reklāmas vēstulei piemērojiet stingru likumu: tā vietā, lai spiestu «Dzēst», vienmēr ritiniet līdz apakšai un nospiediet mazo saiti **«Atrakstīties» (Unsubscribe)**. Pēc divām nedēļām e-pastu plūsma samazināsies par 90%.

---

## Kontrolsaraksts: digitālā kārtība nedēļas nogalē

Ieviesiet skaidrību 4 soļos:

- [ ] **1. solis: Darbvirsma un Lejupielādes:** Pārvietojiet visus failus no darbvirsmas un «Lejupielādēm» vienā pagaidu mapē `Jaunskirot_2026`. Atstājiet darbvirsmu kristāldzidru. Izskatiet šo mapi nedēļas laikā pēc PARA principa.
- [ ] **2. solis: PARA ieviešana:** Izveidojiet diska pamatmapē 4 galvenās mapes: `01_Projects`, `02_Areas`, `03_Resources`, `04_Archive`.
- [ ] **3. solis: Fotoattēlu tīrīšana:** Izdzēsiet vecos ekrānuzņēmumus un palaidiet galerijas dublikātu apvienošanu telefonā.
- [ ] **4. solis: Rezerves kopijas:** Pievienojiet ārējo disku, iestatiet automātisko dublēšanu un nošifrējiet svarīgākos datus.

---

## Secinājums: Kārtības sniegtais miers

Tīrs dators ir digitāls ekvivalents kārtīgam un brīvam darbagaldam galdnieka darbnīcā.

Kad jūs atverat klēpjdatoru un redzat mierīgu, tīru ekrānu, kad jebkurš dokuments atrodams divās sekundēs un visi ģimenes arhīvi ir drošībā pēc 3-2-1 likuma, prāts atbrīvojas no lieka satraukuma. Tehnoloģijas atkal ieņem savu īsto vietu — tās kļūst par klusu vidi mierīgai dzīvei un radošam darbam.
