CXXFLAGS := -Wall -std=c++17
CXX := g++

OBJ_FILES := comp.o find.o ops.o rem.o add.o
MAIN_FILES := ${wildcard main/*.cpp}
MAINO_FILES := ${MAIN_FILES:main/%.cpp=%}

%.o: ./src/src1/%.cpp
	${CXX} ${CXXFLAGS} -c $? -o $@

%.o: ./src/src2/%.cpp
	${CXX} ${CXXFLAGS} -c $? -o $@

%: ./main/%.cpp ${OBJ_FILES}
	${CXX} ${CXXFLAGS} $^ -o $@

all: ${OBJ_FILES} ${MAINO_FILES}
	echo "Compiled all main files"

.PHONY: clean
clean:
	-rm -f main*
	rm -f *.o