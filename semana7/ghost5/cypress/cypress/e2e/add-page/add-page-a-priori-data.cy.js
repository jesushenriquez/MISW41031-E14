const { signIn, screenshot } = require('../../support/utils');
const { Page } = require('../../pageObjects/page');

describe('Add Page', function() {

    const page = new Page();

    const pageData = [
        { 
            title: 'Aventuras en el bosque',
            description: 'Descubre un mundo mágico lleno de criaturas fascinantes en esta emocionante aventura en el bosque.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Recetas deliciosas',
            description: 'Encuentra las recetas más sabrosas y fáciles de preparar para sorprender a tus seres queridos.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Consejos de belleza',
            description: 'Descubre los secretos de la belleza con nuestros consejos expertos para cuidar tu piel y cabello.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Viajes alrededor del mundo',
            description: 'Embárcate en un viaje inolvidable y descubre los destinos más impresionantes de todo el mundo.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Entrenamiento en casa',
            description: 'Logra tu mejor forma física desde la comodidad de tu hogar con nuestros efectivos ejercicios.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Moda y estilo',
            description: 'Descubre las últimas tendencias de moda y obtén consejos para lucir siempre elegante y a la moda.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Consejos financieros',
            description: 'Aprende a administrar tu dinero de manera inteligente y alcanza la estabilidad financiera que deseas.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Arte en tu hogar',
            description: 'Embellece tus espacios con obras de arte únicas y crea un ambiente inspirador en tu hogar.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Consejos para estudiar',
            description: 'Mejora tus habilidades de estudio y aprovecha al máximo tu tiempo de aprendizaje con nuestros consejos prácticos.',
            image: 'https://source.unsplash.com/random'
        },
        { 
            title: 'Consejos para padres primerizos',
            description: 'Descubre los mejores consejos para afrontar la maravillosa pero desafiante experiencia de ser padre primerizo.',
            image: 'https://source.unsplash.com/random'
        }
    ];

    const pageDataWithYoutube = [
        { 
            title: 'Aventuras en el bosque',
            description: 'Descubre un mundo mágico lleno de criaturas fascinantes en esta emocionante aventura en el bosque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Recetas deliciosas',
            description: 'Encuentra las recetas más sabrosas y fáciles de preparar para sorprender a tus seres queridos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
        },
        { 
            title: 'Consejos de belleza',
            description: 'Descubre los secretos de la belleza con nuestros consejos expertos para cuidar tu piel y cabello. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=YQHsXMglC9A'
        },
        { 
            title: 'Viajes alrededor del mundo',
            description: 'Embárcate en un viaje inolvidable y descubre los destinos más impresionantes de todo el mundo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=8TlxDuXKmRk'
        },
        { 
            title: 'Entrenamiento en casa',
            description: 'Logra tu mejor forma física desde la comodidad de tu hogar con nuestros efectivos ejercicios. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Moda y estilo',
            description: 'Descubre las últimas tendencias de moda y obtén consejos para lucir siempre elegante y a la moda. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
        },
        { 
            title: 'Consejos financieros',
            description: 'Aprende a administrar tu dinero de manera inteligente y alcanza la estabilidad financiera que deseas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=YQHsXMglC9A'
        },
        { 
            title: 'Arte en tu hogar',
            description: 'Embellece tus espacios con obras de arte únicas y crea un ambiente inspirador en tu hogar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=8TlxDuXKmRk'
        },
        { 
            title: 'Consejos para estudiar',
            description: 'Mejora tus habilidades de estudio y aprovecha al máximo tu tiempo de aprendizaje con nuestros consejos prácticos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Consejos para padres primerizos',
            description: 'Descubre los mejores consejos para afrontar la maravillosa pero desafiante experiencia de ser padre primerizo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor a scelerisque tincidunt, quam ligula tristique urna, ut ultrices neque ligula vel nisl. Aenean vulputate est eu nunc lobortis, at tincidunt nulla faucibus. Aliquam vitae tincidunt urna. Quisque elementum lacus sit amet felis rhoncus, eu vulputate mauris semper. In hac habitasse platea dictumst. Curabitur id hendrerit dui. Proin tristique libero ut metus pellentesque, sed consequat dui posuere. Suspendisse potenti. Nam id leo lacus. Nullam finibus risus vel ex vehicula, et tincidunt dui congue. Nunc ac finibus dui. Curabitur fermentum auctor turpis nec egestas. Curabitur ut quam sed massa fringilla congue. Nulla non convallis justo. Nullam ut tortor at ligula varius cursus in at tellus.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
        }
    ];

    const pageDataLongDescription = [
        { 
            title: 'This is the example',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque rhoncus leo, sit amet lobortis ex. Donec et velit eu lorem lobortis tincidunt vitae et eros. Suspendisse potenti. Sed vitae convallis neque. Pellentesque tristique euismod faucibus. Ut auctor enim vel pharetra egestas. Suspendisse vel lacus id justo egestas laoreet. In hac habitasse platea dictumst. Morbi sed finibus est. Sed mollis turpis eu tincidunt vestibulum. Aliquam vel faucibus metus. Suspendisse malesuada, massa sed iaculis rhoncus, justo erat commodo sem, ut feugiat ante purus nec nulla. Aenean posuere auctor nibh eu congue. Sed congue enim in nunc aliquam fringilla. Etiam ullamcorper euismod turpis nec suscipit.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Travel Adventures',
            description: 'Praesent tempus elementum pharetra. Curabitur blandit ante ut ultricies sagittis. Proin nec tortor et elit vestibulum iaculis. Vestibulum at eros at neque tincidunt euismod. Duis posuere lacus sit amet metus euismod, non cursus mi tristique. Curabitur dictum scelerisque est, id ullamcorper metus malesuada ac. Phasellus pulvinar, lacus nec vulputate tempus, mi justo tempus velit, vel accumsan turpis tortor id ligula. Morbi aliquam, erat ac vestibulum tempus, justo nunc efficitur ipsum, in aliquet nulla ante a nisi. Curabitur vulputate dui lectus, ac placerat metus accumsan ac. Nam euismod sagittis neque, non vestibulum nisi auctor in. Nulla congue, ex vitae auctor congue, tellus urna tincidunt mi, at tincidunt turpis dolor sit amet mauris. Etiam auctor, nunc in faucibus ullamcorper, enim mi elementum arcu, non tincidunt ex ligula vel nunc. Duis ut sapien lobortis, tristique erat eu, dapibus tellus. Aenean id elementum nulla, vel gravida erat. Fusce sollicitudin auctor justo non pellentesque. Aenean tristique purus a odio fringilla, ac elementum nisl aliquet.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Home Workout',
            description: 'Nullam in mi pharetra, volutpat mi a, ultrices mi. Morbi gravida efficitur efficitur. Duis at sapien rutrum, cursus erat vel, auctor eros. Mauris at sagittis lacus. Nullam ut neque eu ante scelerisque convallis sed a diam. Vestibulum rutrum commodo tortor. Mauris pretium metus nec libero tristique, ac eleifend lacus egestas. In pretium aliquam dolor, at vestibulum felis semper quis. Aliquam eleifend auctor pharetra. Cras facilisis libero lectus, eu bibendum metus efficitur vitae. Mauris nec augue nec est dignissim vulputate. Nulla maximus lorem ac mi interdum, non vulputate nunc convallis. Aliquam sit amet augue risus. Curabitur lacinia aliquam sem, id dictum lacus facilisis a. Vivamus nec volutpat erat. Aliquam et lectus auctor, tincidunt nisl at, lacinia lorem.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Delicious Recipes',
            description: 'Proin id nisl ac enim posuere ultricies. Donec euismod massa vitae ultricies rhoncus. Nulla facilisi. Curabitur rhoncus justo non nunc pellentesque, sit amet lacinia nunc fringilla. Fusce hendrerit turpis sed neque gravida, eu aliquam metus tristique. Curabitur viverra posuere risus ac ultricies. Nulla ultrices, odio id convallis auctor, turpis erat tincidunt ligula, a consectetur risus odio at leo. Duis auctor pulvinar ex id viverra. Integer eu eros odio. Nulla facilisi. In hac habitasse platea dictumst. Etiam dignissim, quam ac laoreet pellentesque, nunc sem semper odio, id tristique erat metus id metus. Etiam tempus, orci nec volutpat scelerisque, risus est fermentum erat, nec egestas dolor lectus eu risus. Etiam ut mauris augue. Mauris pretium nulla at nunc hendrerit aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Gardening Tips',
            description: 'Vestibulum accumsan tempus efficitur. Nullam aliquam enim in malesuada volutpat. Integer volutpat tortor a est tincidunt, ut dapibus orci placerat. Nam semper pulvinar massa, sed interdum dui. Nulla facilisi. Sed non elit luctus, vulputate urna a, hendrerit massa. Sed semper nisl vitae sollicitudin dignissim. Nam a velit dolor. Phasellus a pellentesque sapien, sed gravida metus. Integer nec placerat tellus. Ut sit amet tincidunt elit. Pellentesque id tortor ipsum. In hac habitasse platea dictumst. Sed sed nibh a nibh tincidunt convallis. Suspendisse interdum ullamcorper risus vitae tempus. Sed in risus venenatis, tristique erat eu, finibus turpis.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Technology Trends',
            description: 'Morbi nec placerat leo. Nulla in nulla ligula. Pellentesque blandit interdum urna vel ultricies. Sed id scelerisque dolor. Integer consectetur ipsum in felis fringilla, in rhoncus ligula sollicitudin. Sed in lorem auctor, posuere ipsum sed, dignissim metus. Mauris fermentum erat eu justo lacinia, non cursus mi hendrerit. Sed finibus lacinia turpis ac viverra. Quisque et tristique lorem. Etiam interdum bibendum turpis, eu consequat diam sollicitudin sed. Suspendisse sit amet turpis ut nisi gravida feugiat. Proin nec iaculis turpis. Mauris eget elit vitae nisl feugiat volutpat sed et ante. Nullam in auctor purus. Quisque at dolor feugiat, fermentum libero at, efficitur tortor. Aenean efficitur, odio eget hendrerit facilisis, velit urna fermentum tellus, at malesuada risus diam a tortor. Sed eu pulvinar tellus. Nam ullamcorper tellus ligula, vitae malesuada mi volutpat id. Donec eget enim in ex gravida rhoncus. Aliquam sagittis magna at augue tempus, non lacinia mi convallis. Nam a pulvinar ante, sed posuere odio. Donec eu orci scelerisque, tristique sem eget, maximus enim. Nulla facilisi. Integer id tellus ac odio posuere suscipit. Curabitur id dui nunc. Mauris tincidunt ligula eget turpis fermentum, sit amet maximus neque iaculis. Fusce hendrerit mauris sed ultricies ultricies. In tristique enim in massa condimentum posuere.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Fashion Trends',
            description: 'Vivamus efficitur aliquet risus, et dapibus nunc dignissim et. Suspendisse sagittis urna vitae erat pharetra consectetur. Ut dapibus justo ac tortor dapibus, nec egestas mauris luctus. Duis gravida varius erat, id efficitur mauris lacinia id. Cras nec purus eget neque convallis posuere. Sed iaculis nisl eget odio auctor, et tincidunt lectus bibendum. Nam non tortor cursus, aliquet lectus ut, sollicitudin turpis. Mauris rhoncus nulla id lorem aliquam pulvinar. Integer condimentum, velit nec dapibus placerat, lacus ante fringilla ante, nec consectetur mi arcu a nulla. Sed sed finibus dolor. Quisque suscipit eu nulla in finibus. Suspendisse sit amet scelerisque ligula, sed aliquam ex. Aenean accumsan pharetra ligula, in cursus ligula pulvinar sed. Aliquam id turpis vehicula, aliquet nisl eu, iaculis est. Nulla fringilla turpis id eros malesuada aliquam. Suspendisse suscipit erat metus, vitae aliquam mi interdum nec.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Healthy Lifestyle',
            description: 'Curabitur malesuada elit id enim hendrerit egestas. Sed commodo auctor vestibulum. Aliquam sagittis ligula magna, in suscipit urna interdum vel. Nam nec congue tellus. Maecenas scelerisque dignissim urna at auctor. Morbi eget mauris non mauris pulvinar sollicitudin. Donec nec urna nec urna laoreet vulputate nec non mauris. Nam pretium lectus vitae sem tincidunt condimentum. Phasellus efficitur, mauris a tristique consequat, felis sapien feugiat justo, sed posuere metus ante ut purus. Maecenas ultrices vestibulum neque, ut volutpat mauris iaculis ut. Proin sollicitudin facilisis sagittis. Sed eu leo ligula. Mauris consectetur congue sem et blandit. Proin ut sollicitudin dui. Mauris porta metus id tortor finibus, id interdum neque ultrices. Quisque et metus vitae felis aliquet eleifend. Aenean luctus consectetur ante sed ullamcorper.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Art and Culture',
            description: 'In rhoncus fringilla efficitur. Donec bibendum condimentum felis, et dapibus elit consectetur sit amet. Nulla eget est vel ante auctor dignissim. Curabitur interdum elit ligula, a feugiat tellus egestas sed. Quisque ultricies, tellus id sollicitudin vestibulum, nisi purus semper urna, eget fringilla lacus nulla non risus. Fusce consequat ipsum ut nisi scelerisque ullamcorper. Integer interdum nisi vitae metus egestas dictum. Nullam et mi ultricies, sollicitudin neque a, elementum sapien. Sed efficitur mauris at aliquam semper. Cras in ultrices sapien. Nulla vitae sapien vestibulum, viverra purus sed, rhoncus metus. Morbi egestas elit eget ullamcorper porttitor. Sed a viverra neque. Sed scelerisque lacinia odio, eget commodo ante volutpat ut. Suspendisse potenti. Sed id velit ac ipsum interdum dapibus a quis enim. Aenean varius ultricies cursus. Aenean sit amet lobortis erat, et auctor orci. Aliquam ac est tincidunt, eleifend urna id, rhoncus lacus. Cras feugiat nisl ac gravida tristique.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        { 
            title: 'Outdoor Adventures',
            description: 'Phasellus fermentum tellus nec metus semper, eu tempor justo egestas. Mauris nec lacus varius, sagittis mauris id, commodo neque. Aliquam varius dui quis finibus tempor. Nulla facilisi. Donec imperdiet ligula ut volutpat ullamcorper. Quisque posuere odio ut ipsum posuere, vitae faucibus elit pulvinar. Mauris vitae risus malesuada, fringilla dolor vitae, vulputate ex. Quisque et tempor diam, id placerat libero. Nulla feugiat metus in sem pulvinar facilisis. Sed eu viverra metus. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tristique eros ac nisl vehicula, id tincidunt erat finibus. Fusce pharetra fermentum tortor, nec commodo nunc tristique eget. Mauris convallis congue mauris vitae ullamcorper. Phasellus sit amet nibh vitae felis auctor fermentum. Nullam dapibus mauris eu sem tincidunt luctus. Nulla sagittis enim purus, eget ultrices enim blandit non. In gravida lacus eget risus euismod, vitae vulputate risus cursus. Pellentesque id justo quis risus auctor iaculis. Vivamus lobortis velit nec viverra placerat. Nulla facilisi. Curabitur at consequat libero. Integer fringilla felis non velit congue, in sollicitudin justo tempus. Quisque ac efficitur enim, id posuere sapien. Fusce at ex vitae ligula placerat dapibus at at metus. Suspendisse scelerisque sapien id ex tempor luctus. Integer placerat mauris id erat iaculis, eu pellentesque nunc lobortis. Donec nec erat vitae mi posuere auctor eget vitae elit. Vestibulum quis felis magna.',
            image: 'https://source.unsplash.com/random',
            youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    ];
    
    
    pageData.forEach((data) => {
        it('Registrar y publicar una nueva pagina', function() {
            signIn();
            page.clickPageLink();
            page.clickNavigateToPageEditor();
            page.title(data.title);
            page.type(data.description);
            page.publishAndBackToEditor();
            page.gotoPagesList();
            page.checkTitleInList(data.title);
        })
    });
    
    pageData.forEach((data) => {
        it('Registrar y publicar una nueva pagina con imagen', function() {
            signIn();
            page.clickPageLink();
            page.clickNavigateToPageEditor();
            page.title(data.title);
            page.addImage(data.image);
            page.publishAndBackToEditor();
            page.gotoPagesList();
            page.checkTitleInList(data.title);
        })
    });

    pageDataWithYoutube.forEach((data) => {
        it('Registrar y Publicar una nueva page con un texto de al menos 1000 caracteres y un video de youtube.', function() {
            signIn();
            page.clickPageLink();
            page.clickNavigateToPageEditor();
            page.title(data.title);
            page.addYoutube(data.youtube);
            page.publishAndBackToEditor();
            page.gotoPagesList();
            page.checkTitleInList(data.title);
        })
    });

    pageDataLongDescription.forEach((data) => {
        it('Registrar y Publicar una nueva page con Imagen destacada, un texto de al menos 1000 caracteres y un video de youtube.', function() {
            signIn();
            page.clickPageLink();
            page.clickNavigateToPageEditor();
            page.title(data.title);
            page.type(data.description);
            page.addYoutube(data.youtube);
            page.publishAndBackToEditor();
            page.gotoPagesList();
            page.checkTitleInList(data.title);
        })
    });
    
})

describe('Edit Page', function() {
    const page = new Page();

    it('Editar la información de una pagina existente', function() {
        signIn();
        cy.fixture('pages.json').then((pages)=>{
            for (let index = 0; index < 2; index++) {
                cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                    if (length === 1) {
                        page.clickPageLink();
                    } else {
                        page.clickFirstPageLink();
                    }
                });
                cy.wait(1000);

                page.clickFirstPagesListElement();
                cy.wait(1000);
                
                page.clearTitle();
                cy.wait(1000);

                page.title(pages[index].name);
                cy.wait(1000);

                page.clearDescription();
                cy.wait(1000);

                page.typeDescription(pages[index].description);
                cy.wait(1000);

                page.publishUpdate();
                cy.wait(8000);

                page.clickNavigationPage();
                cy.wait(2000);
        
                page.checkTitleInList(pages[index].name);
            }
        })
    })

    it('Editar la información de una pagina existente sin titulo', function() {
        signIn();
        cy.fixture('pages.json').then((pages)=>{
            for (let index = 22; index < 25; index++) {
                cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                    if (length === 1) {
                        page.clickPageLink();
                    } else {
                        page.clickFirstPageLink();
                    }
                });
                cy.wait(1000);

                page.clickFirstPagesListElement();
                cy.wait(1000);
                
                page.clearTitle();
                cy.wait(1000);

                page.clearDescription();
                cy.wait(1000);

                page.typeDescription(pages[index].description);
                cy.wait(1000);

                page.publishUpdate();
                cy.wait(8000);

                page.clickNavigationPage();
                cy.wait(2000);

                page.checkEmptyTitleInList();
            }
        })
    })
    
})

