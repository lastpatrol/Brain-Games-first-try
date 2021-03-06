install:
	npm install

start: 
	npx babel-node src/bin/brain-games.js

even:
	npx babel-node src/bin/brain-even.js

calc:
	npx babel-node src/bin/brain-calc.js

gcd:
	npx babel-node src/bin/brain-gcd.js

progression:
	npx babel-node src/bin/brain-progression.js

prime:
	npx babel-node src/bin/brain-prime.js

exp:
	npx babel-node experiment.js

publish:
	npm publish

lint:
	npx eslint .

push:
	git add .
	git commit -m "$(m)"
	git push