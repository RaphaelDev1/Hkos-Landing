<template>
  <div class="container p-5 col-sm-10 col-lg-12 devisMain">
    <div class="border-bottom"><h3 class="fw-normal mb-5">Facture</h3></div>
    <div class="devisGenerateur border-bottom pb-5 pt-5 row">
      <div class="devisGenerateurLeft pe-5 col-lg">
        <!-- left -->

        <div class="pb-2">
          <label class="form-label">Client</label>
          <select class="form-control" type="">
            <option value="">Sélectionner ou créer un client</option>
            <option value="">Client2</option>
            <option value="">Client3</option>
          </select>
        </div>

        <div class="pb-2">
          <label class="form-label">Numéro de facture</label>
          <input
            class="form-control"
            v-model="form.facturenum"
            type="number"
            readonly="readonly"
            placeholder="1"
          />
        </div>

        <div class="pb-2">
          <label class="form-label">Date</label>
          <input class="form-control" v-model="form.facturedate" type="date" />
        </div>

        <div class="pb-2">
          <label class="form-label">Mode de réglement</label>
          <input
            class="form-control"
            v-model="form.modereglement"
            type="text"
          />
        </div>

        <div class="pb-2">
          <label class="form-label">Date limite de réglement </label>
          <input class="form-control" v-model="form.limitedate" type="date" />
        </div>
      </div>
      <div class="devisGenerateurRight col-lg">
        <!-- right -->

        <div>
          <label for="inputDesctiption">Message</label>
          <textarea
            class="form-control"
            rows="4"
            v-model="form.messagefacture"
          ></textarea>
        </div>
      </div>
    </div>
    <!--Devis info -->

    <div class="table col-sm-10 col-lg-12">
      <div
        class="t-row row m-auto input-group mt-5"
        id="devismainblock"
        v-for="row in form.table"
        :key="row"
      >
        <div class="col-xl-4">
          <label class="form-label">Description</label>
          <input class="form-control" v-model="row.product" type="text" />
        </div>
        <div class="col">
          <label class="form-label">Date</label>
          <input class="form-control" v-model="row.dateproduct" type="date" />
        </div>

        <div class="col">
          <label class="form-label">Quantité</label>
          <input
            id="qty"
            class="form-control calc-inp"
            v-model="row.quantiteproduct"
            type="number"
            placeholder="1"
            step="0.1"
          />
        </div>

        <div class="col">
          <label class="form-label">Unité</label>
          <select
            id="unit"
            class="form-control"
            type=""
            v-model="row.uniteproduct"
          >
            <option value="Piéce(s)">Piéce(s)</option>
            <option value="Heures">Heures</option>
            <option value="Kilometres">Km</option>
            <option value="Kilogrammes">Kg</option>
            <option value="Metres">M</option>
            <option value="Lot">Lot Parc</option>
            <option value="Am">Am</option>
          </select>
        </div>

        <div class="col">
          <label class="form-label">Prix(€)</label>
          <input
            id="price"
            class="form-control calc-inp"
            type="number"
            v-model="row.htprixproduct"
            step="0.01"
          />
        </div>
        <div class="col">
          <label class="form-label">TVA(%)</label>
          <input
            id="tax"
            class="form-control calc-inp"
            type="number"
            v-model="row.tvaproduct"
            placeholder="20%"
            step="0.1"
            pattern="[0-9]+"
          />
        </div>
        <div class="col">
          <label class="form-label">Montant(€)</label>
          <input
            id="amount"
            class="form-control"
            type="number"
            v-model="row.montantproduct"
            placeholder="0.00"
            step="0.01"
            readonly="readonly"
          />
        </div>
      </div>
    </div>
    <!-- table -->

    <div class="mx-auto">
      <button
        class="btn btn-light border-dark mt-3"
        id="addbutton"
        type="button"
        @click="addRow"
      >
        Ajouter +
      </button>
    </div>
  </div>

  <a href="/output.pdf" v-if="status">Download</a>

  <div class="d-flex justify-content-center m-4" v-else>
    <button
      class="btn btn2"
      style="
        background-color: rgb(50, 141, 245);
        color: white;
        padding: 6px 18px;
        margin: 8px;
      "
      @click="sendForm"
    >
      Générer ma facture
    </button>
  </div>
</template>

<script>
class TableRow {
  product = "";
  dateproduct = "";
  uniteproduct = "";
  quantiteproduct = "";
  htprixproduct = "";
  tvaproduct = "";
  montantproduct = "";
}

export default {
  name: "FactureBlockGenerateur",
  props: {
    msg: String,
  },

  data() {
    return {
      status: false,
      form: {
        facturenum: "",
        facturedate: "",
        modereglement: "",
        limitedate: "",
        messagefacture: "",
        table: [new TableRow()],
      },
    };
  },
  methods: {
    addRow() {
      this.form.table.push(new TableRow());
    },
    async sendForm() {
      let res = await fetch("http://localhost:6300/save", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.form),
      });

      let data = await res.text();

      console.log(data);

      if (data == "ok") this.status = true;
    },
  },
  updated() {
    console.log(this.form);
  },
};
</script>

