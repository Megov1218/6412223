JPA :- Java Persistence API is kind of rules that explains how JAVA objects should be stored in a database.
JPA is blueprint that defines what needs to happen, like mapping Java classes to database tables, but it doesnt actually do the work itself.
It provides annotations like @Entity and @ID to describe how your Java objects relate to database table.

Now Hibernate it is implementation of JPA. It follows rules defined by JPA note that Hibernate doesnt need JPA rules
It actually takes care of converting your Java code into sql queries behind the scenes.
Hibernate connecs to your database, creates tables if needed, and runs SQL queries based on your Java code and annotations

Spring Data JPA  is simpler than both of these
It builds on JPA and Hibernate and helps you avoid repetitive database code.
With Spring Data JPA you simply create an interface that extends JpaRepository, and you get ready-made methods like save(), findall(),delete()etc 
without ussing SQL or complex java code by ourself.
