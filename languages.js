function renderHTML() {
    let divTop = $('.top');
    let divLang = $('<div>');
    divLang.addClass('languages');
    divLang.append('<span id="bg">BG</span>')
        .append('<span>/</span>')
        .append('<span id="en" class="hidden">EN</span>');
    divLang.appendTo(divTop);
    let header1 = $('<h1>');
    header1.attr('id', 'heading')
        .text('The most used programming languages');
    header1.appendTo(divTop);

    //first article
    let header2 = $('<h2>');
    header2.addClass('article-header').text('JavaScript');
    header2.appendTo('.first-article');
    let divjs = $('<div>');
    divjs.addClass('js-container');
    divjs.appendTo('.first-article');
    divjs.append('<img class="js-logo" src="js.png" alt="js">');
    let p_js = $('<p>');
    p_js.addClass('js-info')
        .text("JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. It is used to make dynamic webpages interactive and provide online programs, including video games. The majority of websites employ it[citation needed], and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.");
    p_js.appendTo(divjs);

    //second-article

    let heading2 = $('<h2>');
    heading2.addClass('article-header').text('C#');
    heading2.appendTo('.second-article');
    let divCsharp = $('<div>');
    divCsharp.addClass('csharp-container');
    divCsharp.appendTo('.second-article');
    let p_csharp = $('<p>');
    p_csharp.addClass('csharp-info')
        .text('C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with Visual Studio 2017 version 15.5.');
    p_csharp.appendTo(divCsharp);
    divCsharp.append('<img src="csharp.jpg" alt="csharp-logo">');

    //last-article

    let h2_last = $('<h2>');
    h2_last.addClass('article-header').text('Java');
    h2_last.appendTo('.last-article');

    let divJava = $('<div>');
    divJava.addClass('java-container');
    divJava.appendTo('.last-article');
    divJava.append('<img src="java-logoo.png" alt="java-logo">');
    let p_java = $('<p>');
    p_java.addClass('java-info')
        .text("Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers 'write once, run anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use, particularly for client-server web applications, with a reported 9 million developers. Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.");
    p_java.appendTo(divJava);

}
renderHTML();