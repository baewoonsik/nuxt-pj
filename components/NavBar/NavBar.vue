<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NuxtLink to="/" class="navbar-brand">HOME</NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NuxtLink to="/test1" class="nav-link">Temperature</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/test2" class="nav-link">Wind Speed</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/test3" class="nav-link">Test3</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
