

html {
  background-color: rgba(0,0,0,0);
}

body {
  margin: 0;
  background-image: url(https://media.tenor.com/wKk3Z1_CYcYAAAAS/galaxy-stars.gif);
  background-size: cover;
  color: whitesmoke;
  font-family: Noto Sans, "Noto Sans", Arial, sans-serif !important;
}

.main {
  padding: 3px;
  margin-bottom: 34px;
}

.navbar {
  overflow-y: scroll;
  background-color: rgba(25, 25, 25, 0.55);
  backdrop-filter: blur(9px);
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0px;
  display: block;
  height: 34px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.navbar span {
  background-color: rgba(0,0,0,0);
  color: white;
  text-decoration: none;
  padding: 0 4px;
  margin-right: 6px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 24px;
}

.navbar a {
  background-color: rgba(0,0,0,0);
  color: white;
  text-decoration: none;
  padding: 1px 4px;
  margin-right: 6px;
  font-size: 24px;
  height: 34px;
  white-space: nowrap;
  display: inline;
}

.navbar a:hover {
  background-color: rgba(255,255,255,0.35);
}

.consolea {
  color: white;
  text-decoration: underline;
}
.consolea:hover {
  color: lightskyblue;
  text-decoration: underline;
}

.app {
  width: 100%;
  height: calc(100vh - 36px);
  border: none;
}

.iconbtn {
  width: 4px;
  text-indent: -4px;
}

.material-symbols-outlined {
  color: white !important;
}

.confont {
  font-family: Noto Sans, "Noto Sans", Arial, sans-serif !important;
}!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
