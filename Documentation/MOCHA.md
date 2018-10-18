# Tester les fonctions "Frontend"

<img src="https://cdn-images-1.medium.com/max/1200/0*gV7fEaDKRGwpprdj.png" height="100"/> 

Voici une explication brève sur la façon de configurer les tests unitaires pour vos interfaces afin de garantir une structure de code solide.

### Installation nécéssaire avec npm

```bash
#install required modules
npm install mocha chai

#create a package.json to list project dependencies (optional) 
npm init
```

commencez par créer un fichier test.html et collez l’extrait de code suivant dans votre fichier.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Gitgood!</title>
    <link rel="stylesheet" media="all" href="node_modules/mocha/mocha.css">
</head>
<body>
<div id="mocha"><p><a href=".">Index</a></p></div>
<div id="messages"></div>
<div id="fixtures"></div>
<!--PROJECT-SCRIPT-->
<script>
        function Linux(distro){
            this.isCool = true,
            this.math = function(num1, num2){
                return num1 - num2;
            },
            this.distro = distro
        }
</script>
<!--MOCKA-&-CHAI-SUITE-->
<script src="node_modules/mocha/mocha.js"></script>
<script src="node_modules/chai/chai.js"></script>
<script>mocha.setup('bdd')</script>
<!--TEST-SUITE-->
<script src="test.js"></script>
<!--EXEC-TESTING-->
<script>mocha.run();</script>
</body>
</html>
```

Ensuite, créez un fichier avec le nom test.js, et copiez, collez le code suivant!

```javascript
var expect = chai.expect;

describe("Linux", function () {
    describe("Env variables", function () {
        it("Linux should be cool!", function () {
            var linux = new Linux("ArchLinux");
            expect(linux.isCool).to.equal(true);
        });

        it("should have the same distro name as the one provided", function () {
            var linux = new Linux("Debian");
            expect(linux.distro).to.equal("Debian");
        });
    });

    describe("features", function () {
        it("should throw because Ubuntu", function () {
            expect(function () {
                new Linux("Ubuntu").math("foo", "bar")
            }).to.throw(Error);
        });
    });
});
```

Comme visible ci-dessus, on peut decrire des ensemble de tests contenant d'autres ensemble de tests, ce qui permet une meilleure classification des tests.

Pour vérifier le status des tests, simplement ouvrir ```test.html``` !

Vous avez maintenant une configuration de test "Frontend" appropriée, vous pouvez la modifier un peu pour l'adapter à vos besoins. Mocha peut également être utilisé comme configuration de test NodeJs, consultez la documentation Mocha à ce sujet.

Have fun!

---

[Retourner à la page titre](https://github.com/MathieuAuclair/ReactPlayground/blob/master/Documentation/FRONTEND.md)
[Aller à l'introduction](https://github.com/MathieuAuclair/ReactPlayground/blob/master/Documentation/INTRO.md)
