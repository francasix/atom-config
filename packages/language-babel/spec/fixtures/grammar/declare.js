// SYNTAX TEST "source.js.jsx"

declare module 'a-unique-module-name' {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                                  keyword.other.declare.flowtype
//      ^^^^^^                           storage.type.module.flowtype
//             ^^^^^^^^^^^^^^^^^^^^^^    string.quoted.single.js
//             ^                         punctuation.definition.string.begin.js
//                                  ^    punctuation.definition.string.end.js
//                                    ^  punctuation.section.class.begin.js
  declare interface Stack<T> {}
//^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^                        keyword.other.declare.flowtype
//        ^^^^^^^^^              keyword.other.interface.flowtype
//                  ^^^^^        support.type.class.interface.js
//                       ^ ^     punctutation.flowtype
//                        ^      support.type.class.flowtype
//                           ^   punctuation.section.class.begin.js
//                            ^  punctuation.section.class.end.js
  declare class Response extends A mixins A,B {}
//^^^^^^^ ^^^^^ ^^^^^^^^ ^^^^^^^ ^ ^^^^^^ ^^^ ^^  meta.class.body.js
//^^^^^^^                                         keyword.other.declare.flowtype
//        ^^^^^                                   storage.type.class.flowtype
//              ^^^^^^^^         ^        ^ ^     entity.name.class.js
//                       ^^^^^^^   ^^^^^^         meta.class.extends.js
//                       ^^^^^^^   ^^^^^^         storage.type.extends.js
//                                         ^      meta.delimiter.comma.js
//                                            ^   punctuation.section.class.begin.js
//                                             ^  punctuation.section.class.end.js
  declare module.exports: () => Function;
//^^^^^^^ ^^^^^^^^^^^^^^^ ^^ ^^ ^^^^^^^^^  meta.class.body.js
//^^^^^^^                                  keyword.other.declare.flowtype
//        ^^^^^^ ^^^^^^^                   storage.type.module.flowtype
//              ^                          keyword.operator.accessor.flowtype
//                      ^                  punctuation.type.flowtype
//                        ^                punctuation.definition.parameters.begin.js
//                         ^               punctuation.definition.parameters.end.js
//                           ^^            storage.type.function.arrow.js
//                              ^^^^^^^^   support.type.builtin.class.flowtype
//                                      ^  punctuation.terminator.statement.js
  declare type NextFunction = (error?: Object) => void
//^^^^^^^ ^^^^ ^^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^ ^^ ^^^^  meta.class.body.js
//^^^^^^^                                               keyword.other.declare.flowtype
//        ^^^^                                          keyword.other.typedef.flowtype
//             ^^^^^^^^^^^^                             support.type.class.flowtype
//                            ^                         punctuation.definition.parameters.begin.js
//                             ^^^^^                    variable.other.readwrite.js
//                                  ^                   keyword.operator.optional.parameter.flowtype
//                                   ^                  punctuation.type.flowtype
//                                     ^^^^^^           support.type.builtin.class.flowtype
//                                           ^          punctuation.definition.parameters.end.js
//                                                ^^^^  support.type.builtin.primitive.flowtype
}
// <- meta.class.body.js

interface Iterator<T> {
// <- meta.class.body.js keyword.other.interface.flowtype
 // <- meta.class.body.js keyword.other.interface.flowtype
//^^^^^^^ ^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^                keyword.other.interface.flowtype
//        ^^^^^^^^       support.type.class.interface.js
//                ^ ^    punctutation.flowtype
//                 ^     support.type.class.flowtype
//                    ^  punctuation.section.class.begin.js
    next(): IteratorResult<T>
//  ^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^                       entity.name.function.method.js
//      ^                      punctuation.definition.parameters.begin.js
//       ^                     punctuation.definition.parameters.end.js
//        ^                    punctuation.type.flowtype
//          ^^^^^^^^^^^^^^ ^   support.type.class.flowtype
//                        ^ ^  punctutation.flowtype
    iterator(): Iterator<T>
//  ^^^^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^  meta.function.method.js
//  ^^^^^^^^                 entity.name.function.method.js
//          ^                punctuation.definition.parameters.begin.js
//           ^               punctuation.definition.parameters.end.js
//            ^              punctuation.type.flowtype
//              ^^^^^^^^ ^   support.type.class.flowtype
//                      ^ ^  punctutation.flowtype
}
// <- meta.class.body.js punctuation.section.class.end.js

declare var NaN: number
// <- meta.class.body.js keyword.other.declare.flowtype
 // <- meta.class.body.js keyword.other.declare.flowtype
//^^^^^ ^^^ ^^^^ ^^^^^^  meta.class.body.js
//^^^^^                  keyword.other.declare.flowtype
//      ^^^              storage.type.js
//          ^^^          variable.other.readwrite.js
//             ^         punctuation.type.flowtype
//               ^^^^^^  support.type.builtin.primitive.flowtype

declare var module: {
// <- meta.class.body.js keyword.other.declare.flowtype
 // <- meta.class.body.js keyword.other.declare.flowtype
//^^^^^ ^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^                keyword.other.declare.flowtype
//      ^^^            storage.type.js
//          ^^^^^^     variable.other.readwrite.js
//                ^    punctuation.type.flowtype
//                  ^  meta.brace.round.open.flowtype
    exports: any;
//  ^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^        variable.other.readwrite.js
//         ^       punctuation.type.flowtype
//           ^^^   support.type.builtin.primitive.flowtype
    require(id: string): any;
//  ^^^^^^^^^^^ ^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^ ^^^   meta.function.method.js
//  ^^^^^^^                    entity.name.function.method.js
//         ^                   punctuation.definition.parameters.begin.js
//          ^^                 variable.other.readwrite.js
//            ^        ^       punctuation.type.flowtype
//              ^^^^^^   ^^^   support.type.builtin.primitive.flowtype
//                    ^        punctuation.definition.parameters.end.js
    id: string;
//  ^^^ ^^^^^^^  meta.class.body.js
//  ^^           variable.other.readwrite.js
//    ^          punctuation.type.flowtype
//      ^^^^^^   support.type.builtin.primitive.flowtype
    filename: string;
//  ^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^^           variable.other.readwrite.js
//          ^          punctuation.type.flowtype
//            ^^^^^^   support.type.builtin.primitive.flowtype
    loaded: boolean;
//  ^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^            variable.other.readwrite.js
//        ^           punctuation.type.flowtype
//          ^^^^^^^   support.type.builtin.primitive.flowtype
    parent: any;
//  ^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^        variable.other.readwrite.js
//        ^       punctuation.type.flowtype
//          ^^^   support.type.builtin.primitive.flowtype
    children: Array<any>;
//  ^^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^               variable.other.readwrite.js
//          ^              punctuation.type.flowtype
//            ^^^^^        support.type.builtin.class.flowtype
//                 ^   ^   punctuation.flowtype
//                  ^^^    support.type.builtin.primitive.flowtype
};
// <- meta.class.body.js meta.brace.round.close.flowtype
 // <- meta.class.body.js punctuation.terminator.statement.js

declare class Blob {
// <- meta.class.body.js keyword.other.declare.flowtype
 // <- meta.class.body.js keyword.other.declare.flowtype
//^^^^^ ^^^^^ ^^^^ ^  meta.class.body.js
//^^^^^               keyword.other.declare.flowtype
//      ^^^^^         storage.type.class.flowtype
//            ^^^^    entity.name.class.js
//                 ^  punctuation.section.class.begin.js
    constructor(blobParts?: Array<any>, options?: {
//  ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^ ^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^ ^  meta.function.method.js
//  ^^^^^^^^^^^                                      entity.name.function.method.js
//             ^                                     punctuation.definition.parameters.begin.js
//              ^^^^^^^^^               ^^^^^^^      variable.other.readwrite.js
//                       ^                     ^     keyword.operator.optional.parameter.flowtype
//                        ^                     ^    punctuation.type.flowtype
//                          ^^^^^                    support.type.builtin.class.flowtype
//                               ^   ^               punctuation.flowtype
//                                ^^^                support.type.builtin.primitive.flowtype
//                                    ^              meta.delimiter.comma.js
//                                                ^  meta.brace.round.open.flowtype
        type?: string
//      ^^^^^^ ^^^^^^  meta.class.body.js
//      ^^^^^^ ^^^^^^  meta.function.method.js
//      ^^^^           variable.other.readwrite.js
//          ^          keyword.operator.optional.parameter.flowtype
//           ^         punctuation.type.flowtype
//             ^^^^^^  support.type.builtin.primitive.flowtype
        endings?: string
//      ^^^^^^^^^ ^^^^^^  meta.class.body.js
//      ^^^^^^^^^ ^^^^^^  meta.function.method.js
//      ^^^^^^^           variable.other.readwrite.js
//             ^          keyword.operator.optional.parameter.flowtype
//              ^         punctuation.type.flowtype
//                ^^^^^^  support.type.builtin.primitive.flowtype
    }): void
//  ^^^ ^^^^  meta.class.body.js
//  ^^^ ^^^^  meta.function.method.js
//  ^         meta.brace.round.close.flowtype
//   ^        punctuation.definition.parameters.end.js
//    ^       punctuation.type.flowtype
//      ^^^^  support.type.builtin.primitive.flowtype
    type: string
//  ^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^          variable.other.readwrite.js
//      ^         punctuation.type.flowtype
//        ^^^^^^  support.type.builtin.primitive.flowtype
    size: number
//  ^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^          variable.other.readwrite.js
//      ^         punctuation.type.flowtype
//        ^^^^^^  support.type.builtin.primitive.flowtype
    slice(start?: number, end?: number, contentType?: string): Blob
//  ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^ ^^^^  meta.function.method.js
//  ^^^^^                                                            entity.name.function.method.js
//       ^                                                           punctuation.definition.parameters.begin.js
//        ^^^^^           ^^^           ^^^^^^^^^^^                  variable.other.readwrite.js
//             ^             ^                     ^                 keyword.operator.optional.parameter.flowtype
//              ^             ^                     ^        ^       punctuation.type.flowtype
//                ^^^^^^        ^^^^^^                ^^^^^^         support.type.builtin.primitive.flowtype
//                      ^             ^                              meta.delimiter.comma.js
//                                                          ^        punctuation.definition.parameters.end.js
//                                                             ^^^^  support.type.class.flowtype
}
// <- meta.class.body.js punctuation.section.class.end.js

type CanvasImageSource = HTMLImageElement | number & string
// <- meta.class.body.js keyword.other.typedef.flowtype
 // <- meta.class.body.js keyword.other.typedef.flowtype
//^^ ^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^ ^ ^^^^^^ ^ ^^^^^^  meta.class.body.js
//^^                                                         keyword.other.typedef.flowtype
//   ^^^^^^^^^^^^^^^^^   ^^^^^^^^^^^^^^^^                    support.type.class.flowtype
//                                        ^                  kewyword.operator.union.flowtype
//                                          ^^^^^^   ^^^^^^  support.type.builtin.primitive.flowtype
//                                                 ^         kewyword.operator.intersection.flowtype

type child_process$execOpts = {
// <- meta.class.body.js keyword.other.typedef.flowtype
 // <- meta.class.body.js keyword.other.typedef.flowtype
//^^ ^^^^^^^^^^^^^^^^^^^^^^ ^ ^  meta.class.body.js
//^^                             keyword.other.typedef.flowtype
//   ^^^^^^^^^^^^^^^^^^^^^^      support.type.primitive.flowtype
//                            ^  meta.brace.curly.js
  cwd?: string
//^^^^^ ^^^^^^  meta.class.body.js
//^^^           variable.other.readwrite.js
//   ^          keyword.operator.optional.parameter.flowtype
//    ^         punctuation.type.flowtype
//      ^^^^^^  support.type.builtin.primitive.flowtype
  env?: Object
//^^^^^ ^^^^^^  meta.class.body.js
//^^^           variable.other.readwrite.js
//   ^          keyword.operator.optional.parameter.flowtype
//    ^         punctuation.type.flowtype
//      ^^^^^^  support.type.builtin.class.flowtype
};
// <- meta.class.body.js meta.brace.curly.js
 // <- meta.class.body.js punctuation.object.end.flowtype

type ReactClass<D, P, S> = _ReactClass<D, P, S, *>
// <- meta.class.body.js keyword.other.typedef.flowtype
 // <- meta.class.body.js keyword.other.typedef.flowtype
//^^ ^^^^^^^^^^^^^ ^^ ^^ ^ ^^^^^^^^^^^^^^ ^^ ^^ ^^  meta.class.body.js
//^^                                                keyword.other.typedef.flowtype
//   ^^^^^^^^^^ ^  ^  ^    ^^^^^^^^^^^ ^  ^  ^      support.type.class.flowtype
//             ^       ^              ^          ^  punctutation.flowtype
//               ^  ^                   ^  ^  ^     meta.delimiter.comma.js
//                                              ^   kewyword.operator.existential.flowtype

declare function require(id: string): any;
// <- meta.class.body.js keyword.other.declare.flowtype
 // <- meta.class.body.js keyword.other.declare.flowtype
//^^^^^ ^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^                                     keyword.other.declare.flowtype
//      ^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^ ^^^   meta.function.js
//      ^^^^^^^^                            storage.type.function.js
//               ^^^^^^^                    entity.name.function.js
//                      ^                   punctuation.definition.parameters.begin.js
//                       ^^                 variable.other.readwrite.js
//                         ^        ^       punctuation.type.flowtype
//                           ^^^^^^   ^^^   support.type.builtin.primitive.flowtype
//                                 ^        punctuation.definition.parameters.end.js
//                                       ^  punctuation.terminator.statement.js

declare var foo: (
// <- meta.class.body.js keyword.other.declare.flowtype
 // <- meta.class.body.js keyword.other.declare.flowtype
//^^^^^ ^^^ ^^^^ ^  meta.class.body.js
//^^^^^             keyword.other.declare.flowtype
//      ^^^         storage.type.js
//          ^^^     storage.type.function.js
//             ^    punctuation.type.flowtype
//               ^  punctuation.definition.parameters.begin.js
  (<T>(x: T) => T) & (<T,U>(x: T, y: U) => U)
//^^^^^^^ ^^ ^^ ^^ ^ ^^^^^^^^^ ^^ ^^ ^^ ^^ ^^  meta.class.body.js
//^   ^              ^     ^                   punctuation.definition.parameters.begin.js
// ^ ^                ^   ^                    punctutation.flowtype
//  ^     ^     ^      ^ ^     ^     ^     ^   support.type.class.flowtype
//     ^                    ^     ^            variable.other.readwrite.js
//      ^                    ^     ^           punctuation.type.flowtype
//         ^     ^                    ^     ^  punctuation.definition.parameters.end.js
//           ^^                         ^^     storage.type.function.arrow.js
//                 ^                           kewyword.operator.intersection.flowtype
//                      ^       ^              meta.delimiter.comma.js
)
// <- meta.class.body.js punctuation.definition.parameters.end.js


// >> only:(source.js.jsx)