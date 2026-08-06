#!/bin/bash
# Script para rodar CodeQL localmente
# Uso: ./scripts/codeql-local.sh

set -e

CODEQL_PATH="/tmp/codeql"
export PATH="$CODEQL_PATH:$PATH"

echo "CodeQL - Analise de Seguranca Local"
echo "======================================"

# Verificar se o CodeQL esta instalado
if ! command -v codeql &> /dev/null; then
    echo "CodeQL nao encontrado. Instale com:"
    echo "   curl -sL https://github.com/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz | tar -xz -C /tmp/"
    exit 1
fi

echo "CodeQL $(codeql --version | head -1)"
echo ""

# Criar diretorio de saida
mkdir -p /tmp/codeql-results

echo "Criando banco de dados..."
codeql database create /tmp/codeql-results/commandrm-db \
    --language=javascript-typescript \
    --source-root=. \
    --overwrite 2>&1

echo ""
echo "Executando analise de seguranca..."
codeql database analyze /tmp/codeql-results/commandrm-db \
    javascript/codeql-suites/codeql-security-extended.qls \
    --format=sarif-latest \
    --output=/tmp/codeql-results/results.sarif 2>&1

echo ""
echo "Gerando relatorio..."
codeql database analyze /tmp/codeql-results/commandrm-db \
    javascript/codeql-suites/codeql-security-and-quality.qls \
    --format=sarif-latest \
    --output=/tmp/codeql-results/results-quality.sarif 2>&1

echo ""
echo "Analise concluida!"
echo ""
echo "Resultados salvos em:"
echo "   /tmp/codeql-results/results.sarif (seguranca)"
echo "   /tmp/codeql-results/results-quality.sarif (qualidade)"
echo ""
echo "Resumo:"
codeql database analyze /tmp/codeql-results/commandrm-db \
    javascript/codeql-suites/codeql-security-extended.qls \
    --format=csv \
    --output=/tmp/codeql-results/results.csv 2>&1

if [ -f /tmp/codeql-results/results.csv ]; then
    echo ""
    echo "Vulnerabilidades encontradas:"
    tail -n +2 /tmp/codeql-results/results.csv | wc -l
    echo ""
    echo "Para ver detalhes:"
    echo "   cat /tmp/codeql-results/results.csv"
fi
