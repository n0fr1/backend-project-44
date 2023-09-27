install deps:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

prettier:
	npx prettier --write bin/brain-even.js bin/brain-games.js src/cli.js