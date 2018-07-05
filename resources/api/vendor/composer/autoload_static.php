<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitff26d7adb1918ad788d621f42629d63d
{
    public static $prefixLengthsPsr4 = array (
        'm' => 
        array (
            'mikehaertl\\wkhtmlto\\' => 20,
            'mikehaertl\\tmp\\' => 15,
            'mikehaertl\\shellcommand\\' => 24,
        ),
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'G' => 
        array (
            'Greenter\\XMLSecLibs\\' => 20,
            'Greenter\\Report\\' => 16,
            'Greenter\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'mikehaertl\\wkhtmlto\\' => 
        array (
            0 => __DIR__ . '/..' . '/mikehaertl/phpwkhtmltopdf/src',
        ),
        'mikehaertl\\tmp\\' => 
        array (
            0 => __DIR__ . '/..' . '/mikehaertl/php-tmpfile/src',
        ),
        'mikehaertl\\shellcommand\\' => 
        array (
            0 => __DIR__ . '/..' . '/mikehaertl/php-shellcommand/src',
        ),
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Greenter\\XMLSecLibs\\' => 
        array (
            0 => __DIR__ . '/..' . '/greenter/xmldsig/src',
        ),
        'Greenter\\Report\\' => 
        array (
            0 => __DIR__ . '/..' . '/greenter/report/src/Report',
        ),
        'Greenter\\' => 
        array (
            0 => __DIR__ . '/..' . '/greenter/core/src/Core',
            1 => __DIR__ . '/..' . '/greenter/data/src',
            2 => __DIR__ . '/..' . '/greenter/xml/src',
            3 => __DIR__ . '/..' . '/greenter/ws/src',
            4 => __DIR__ . '/..' . '/greenter/greenter/src/Greenter',
            5 => __DIR__ . '/..' . '/greenter/htmltopdf/src',
            6 => __DIR__ . '/..' . '/greenter/xcodes/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
        'B' => 
        array (
            'BaconQrCode' => 
            array (
                0 => __DIR__ . '/..' . '/bacon/bacon-qr-code/src',
            ),
        ),
    );

    public static $classMap = array (
        'SimpleMail' => __DIR__ . '/..' . '/eoghanobrien/php-simple-mail/class.simple_mail.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitff26d7adb1918ad788d621f42629d63d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitff26d7adb1918ad788d621f42629d63d::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitff26d7adb1918ad788d621f42629d63d::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitff26d7adb1918ad788d621f42629d63d::$classMap;

        }, null, ClassLoader::class);
    }
}
