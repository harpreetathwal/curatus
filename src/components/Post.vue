<template>
    <div id="app">
	<button @click="addItem()">Post</button>
        <div v-for="(text,index) in texts" v-bind:key="index" class="container" id="post_box">
            <div class="row" style="border-style: solid;">
                <div class="col-md-8" style="border-style: solid;">
                    <blockquote class="blockquote">
                        <p class="mb-0">
                            {{text.title}}
                        </p>
                        <footer class="blockquote-footer">
                            Curatus User <cite> Test User </cite>
                        </footer>
                    </blockquote>
                    <div class="jumbotron" style="background-color: lavender">
                        <h2>
                            Post Body:
                        </h2>
                        <p>
                            {{text.body}}
                        </p>
                        <p>
                            <a class="btn btn-primary btn-large" href="#">Go to "Test User"s profile.</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-4" style="border-style: solid;padding-left: 0px;  padding-right: 0px;">
                    <img v-bind:src="text.image" style="vertical-align: right" class="img-fluid"/>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>
<script>
        module.exports = {
            name: 'post',
            data: function() {
                return {
                    texts: [{}],
                    show: false
                }
            },
            methods: {
                addItem: function() {
                    console.log("push: ", this);
                    setTimeout(this.texts.push({
                        "body": "\" \"\"I feel pretty\"\" is hilarious and classy! This is def worth seeing in theaters. Libturds on Rotten Tomatoes gave it 33% :( Ignore them and watch this feel-great movie.\" ",
                        "image": "https://resizing.flixster.com/yQpKRgjrVnymE-V2owLNNhl8kgs=/206x305/v1.bTsxMjY1Njg4NDtqOzE3NzQxOzEyMDA7MjcwMDs0MDAw",
                        "link": "https://www.rottentomatoes.com/m/i_feel_pretty_2018/",
                        "title": "e"
                    }),3000) 
                    this.show = !this.show

                }
            },
            props: ['texts']
        }
</script>

