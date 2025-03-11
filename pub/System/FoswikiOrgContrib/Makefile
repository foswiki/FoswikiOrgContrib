FOSWIKI_ROOT?=~/foswiki/core
TARGET=\
  build \
  build/styles.css \
  build/frontpage.css \
  build/pkg.js

include $(FOSWIKI_ROOT)/pub/System/NatSkin/Makefile.include


build/pkg.js: src/bubbles.js src/animate.js
	@echo "generating $@"
	@$(JSMIN) $^ > $@

build/%.css: src/%.css 
	@echo minifying $@ from $<
	@$(CSSMIN) $< $(CSSMIN_ARGS)> $@

build/%.css: src/%.css 
	@echo minifying $@ from $<
	@$(CSSMIN) $< $(CSSMIN_ARGS)> $@

build/%.js: src/%.js
	@echo minifying $@ from $<
	@$(JSMIN) $< > $@

clean:
	rm -f build/*

build:
	@mkdir build
