### Front end

#### Notes 



- aby korzystać z Prismy projekt musi być w TypeScript (albo przynajmniej jego serwerowa część - nie wiem)
- problem z Bazą Posgre z Heroku
    - Prisma aby zrobić migracje potrzebuje uprawnień supervisora, aby edytować bazę danych, ale dla baz danych Hostowanych na Heroku nie ma takiej możliwości
    - zespół Prismy aktualnie pracuje nad tym jak rozwiązać ten problem: https://github.com/prisma/prisma/issues/4571
    - aktualne obejście problemu wygląda tak:
        1. nie zapisuje historii migracji w folderze, robię po prostu  `prisma db push --preview-feature` 
        2. robię migrację, ale na lokalnej bazie danych, a potem zmieniam ustawienia środowiskowe (.env) na hostowaną bazę danych i używam komendy `migrate resolve --applied "{{NAZWA FOLDERU OSTATNIEJ MIGRACJI}}" --preview-feature`
- Postgres:
    1. zainstaluj lokalnie psql
    2. wejdź w powłokę (win+S)'run' - masz tutaj dane do DATABASE_URL
    2. psql -U postgres
       haslo takie same (gdybyś zapomniała hasła: [jak zmienić hasło dla lokalnej bazy psql](https://stackoverflow.com/a/10846346/11889232))
               
- aby Material UI poprawnie działało trzeba je skonfigurować w _document, więcej na ten temat: https://dev.to/felixmohr/setting-up-a-blog-with-next-js-react-material-ui-and-typescript-2m6k
    -  chodzi o to, że style za pierwszym razem gdy strona się wczytuje z serwera są wczytywane z serwera(aby uniknąć 'flickering' (doczytywanie styli po stronie klienta powoduje przeskakiwanie contentu)), ale potem chcę się pozbyć tych z serwera i korzystać tylko z tych po stronie klienta
- Zainstalować Prisma globalnie (lokalna instalacja ma problemy ze ścieżkami na windowsie)


##### przydatne linki
pierwsze odpalenie prismy
https://github.com/prisma/prisma/issues/4571


